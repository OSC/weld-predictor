var vm;

$(document).ready(function () {
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

    if(document.getElementById("vue-app")){
        vm = new Vue({
            el: "#vue-app",
            data: {
                start_panel_data: {
                    user_name: current_user,
                    job_description: "",
                    walltime_hours: 1
                },
                technique_data: {
                    selected: "gmaw"
                },
                dimension_data: {
                    fixture_shapes: [
                        {
                            value: "plate", title: "Plate",
                            dimensions: {
                                width_w1: 12,
                                width_w2: 12,
                                thickness: 0.5,
                                length: 4
                            },
                            joint_designs: [
                                "bead_on_plate",
                                "bevel_groove",
                                "compound_bevel",
                                "j_groove",
                                "u_groove",
                                "v_groove"
                            ]
                        },
                        {
                            value: "t_plate", title: "T-Plate",
                            dimensions: {
                                thickness_t1: 0.5,
                                thickness_t2: 0.5,
                                width_w1: 6,
                                width_w2: 6,
                                length_l: 20,
                                height_h: 4
                            },
                            joint_designs: [
                                "t_bevel"
                            ]
                        },
                        {
                            value: "pipe", title: "Pipe",
                            dimensions: {
                                outer_diameter: 6,
                                wall_thickness: 0.2,
                                length_w1: 4,
                                length_w2: 4
                            },
                            joint_designs: [
                                "bead_on_plate",
                                "bevel_groove",
                                "compound_bevel",
                                "j_groove",
                                "u_groove",
                                "v_groove"
                            ]
                        },
                        {
                            value: "t_pipe", title: "T-Pipe",
                            dimensions: {
                                outer_diameter: 6,
                                wall_thickness: 0.5,
                                flange_thickness_t2: 0.5,
                                length_w1: 6,
                                length_w2: 6,
                                flange_height_h: 2
                            },
                            joint_designs: [
                                "t_bevel"
                            ]
                        },
                        {
                            value: "lap_joint", title: "Lap Joint",
                            dimensions: {
                                thickness_t1: 0.5,
                                thickness_t2: 0.5,
                                width_w1: 6,
                                width_w2: 6,
                                overlap: 0.5,
                                length: 20
                            },
                            joint_designs: [
                                "lap_bevel"
                            ]
                        }
                    ],
                    selected: "plate"
                },
                joint_data: {
                    selected: "bead_on_plate",
                    dimensions: {
                        a: 0.1,
                        b: 0.2,
                        r: 0.125,
                        alpha: 45,
                        beta: 30
                    },
                    root_gap: {
                        present: false,
                        range: 0.10
                    },
                    joint_angle: {
                        alpha: 0.1,
                        beta: 4.0
                    }
                },
                bead_data: {
                    selected: "parabolic",
                    beads: [
                        {
                            value: "parabolic", title: "Parabolic",
                            dimensions: {
                                x: 0.0,
                                y: 0.35,
                                z1: 0.0,
                                z2: 4.0,
                                w: 0.3,
                                a: 0.0,
                                b: 0.1,
                                c: 0.0,
                                d: -0.15,
                                r: 0.0
                            },
                            weld_pass: {
                                current_A: 200.0,
                                voltage_V: 22.5,
                                travel_ipm: 7.5
                            }
                        },
                        {
                            value: "parabolic", title: "Parabolic",
                            dimensions: {
                                x: 0.0,
                                y: 0.35,
                                z1: 0.0,
                                z2: 4.0,
                                w: 0.3,
                                a: 0.0,
                                b: 0.1,
                                c: 0.0,
                                d: -0.15,
                                r: 0.0
                            },
                            weld_pass: {
                                current_A: 200.0,
                                voltage_V: 22.5,
                                travel_ipm: 7.5
                            }
                        }
                    ]
                },
                material_data: {
                    base_material1: {
                        selected: "X65"
                    },
                    base_material2: {
                        selected: "X65"
                    },
                    filler_material: {
                        selected: "MIL-100S-1"
                    }
                },
                procedure_data: {
                    pre_heat_temp_F: 70,
                    pre_heat_temp_C: 21,
                    inter_pass_temp_F: 212,
                    inter_pass_temp_C: 100
                },
                fixture_data: {
                    clamps: [],
                    coolers: [],
                    monitors: []
                }
            },
            watch: {
            },
            methods: {

                validatePipeThickness: function() {
                    // This method will ensure that a user can not set a pipe's thickness to a number greater than it's radius.
                    var shape = this.$data.dimension_data.fixture_shapes.find(function (shape) {
                        return shape.value === this.$data.dimension_data.selected;
                    }, this);
                    if ( (shape.value === "pipe") || (shape.value === "t_pipe") ) {
                        if (shape.dimensions.wall_thickness > shape.dimensions.outer_diameter) {
                            shape.dimensions.wall_thickness = shape.dimensions.outer_diameter * 0.5;
                        }
                    }
                },

                compatibleJoint: function() {
                    // This method will select a joint that is compatible with the selected fixture type if the currently selected joint is not compatible.
                    // var shape = this.$data.dimension_data.fixture_shapes.find(shape => shape.value === this.$data.dimension_data.selected);
                    var shape = this.$data.dimension_data.fixture_shapes.find(function (shape) {
                        return shape.value === this.$data.dimension_data.selected;
                    }, this);
                    var joint = this.$data.joint_data.selected;
                    if (!shape.joint_designs.includes(joint)) {
                        this.$data.joint_data.selected = shape.joint_designs[0];
                    }
                },

                removeWeldPass: function(key) {
                    // Remove a weld pass from the array at the specified index
                    this.bead_data.beads.splice(key, 1);
                },

                addWeldPass: function() {
                    // Add a weld pass to the array with default dimensions
                    this.bead_data.beads.push(this.beadParabolic);
                },

                addBeadParabolic: function () {
                    this.bead_data.beads.push(this.beadParabolic);
                },

                addBeadElliptical: function () {
                    this.bead_data.beads.push(this.beadElliptical);
                },

                addBeadCustom: function () {
                    this.bead_data.beads.push(this.beadComplex);
                },

                renderThree: function() {
                    render_three_shape(this.$data);
                },

                saveSimulation: function() {
                    if (simulation_id == null) {
                        // Create a new Simulation
                        // TODO Add a "processing" notice for the user
                        axios.post(Routes.simulations_path({format: "json"}), { simulation_data: vm.$root.$data, authenticity_token: AUTH_TOKEN })
                            .then(function (response) {
                                console.log(response);
                                this.window.location.href = Routes.root_path();
                            })
                            .catch(function (error) {
                                console.log(error);
                                // TODO: Inform the user of failure
                            })
                    }
                    else {
                        // Update an existing simulation
                        // TODO Add a "processing" notice for the user
                        axios.put(Routes.simulation_path(simulation_id, {format: "json"}), { simulation_data: vm.$root.$data, authenticity_token: AUTH_TOKEN })
                            .then(function (response) {
                                console.log(response);
                                this.window.location.href = Routes.root_path();
                            })
                            .catch(function (error) {
                                console.log(error);
                                // TODO: Inform the user of failure
                            })
                    }
                }
            }
        });

        if (typeof simulation_id !== "undefined" && simulation_id != null) {
            console.log("Loading simulation from server");
            // TODO Add a "processing" notice for the user
            axios.get(Routes.simulation_path(simulation_id, {format: "json"}))
                .then(function (response) {
                    //console.log(response);
                    setInitialVueState(vm, response.data.job_cache)
                })
                .catch(function (error) {
                    // TODO Handle error
                    console.log(error);
                })
        } else {
            render_three_shape(vm.$data);
        };

        $("#form-submit-button").on("click", function () {
                vm.saveSimulation();
            }
        );
    }
});

// Used to assign data to the vue object particularily from an initial load.
//   Vue disallows setting $root.$data directly, so we need to add it piecemeal.
//
// @param { Object } vue_instance An instance of a vue object
// @param { Object } jobcache A json object corresponding to the desired data state
function setInitialVueState(vue_instance, jobcache) {
    vue_instance.$data.start_panel_data = jobcache.data.start_panel_data;
    vue_instance.$data.technique_data = jobcache.data.technique_data;
    vue_instance.$data.procedure_data = jobcache.data.procedure_data;
    vue_instance.$data.material_data = jobcache.data.material_data;
    vue_instance.$data.joint_data = jobcache.data.joint_data;
    vue_instance.$data.fixture_data = jobcache.data.fixture_data;
    vue_instance.$data.dimension_data = jobcache.data.dimension_data;
    vue_instance.$data.bead_data = jobcache.data.bead_data;
    render_three_shape(vue_instance.$data);
}
