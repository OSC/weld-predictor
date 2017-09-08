var vm;

$(document).ready(function () {
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    vm = new Vue({
        el: '#vue-app',
        data: {
            start_panel_data: {
                user_name: current_user,
                job_description: '',
                walltime_hours: 1
            },
            technique_data: {
                types: [
                    { value: 'gmaw', title: 'GMAW' },
                    { value: 'lbw', title: 'LBW' },
                    { value: 'hlaw', title: 'HLAW' },
                    { value: 'pulsed_gmaw', title: 'Pulsed GMAW' },
                    { value: 'weaved_pulsed_gmaw', title: 'Weaved Pulsed GMAW' },
                    { value: 'gtaw', title: 'GTAW' },
                    { value: 'saw', title: 'SAW' },
                    { value: 'smaw', title: 'SMAW' }
                ],
                selected: 'gmaw'
            },
            dimension_data: {
                fixture_shapes: [
                    {
                        value: 'plate', title: 'Plate',
                        dimensions: {
                            width_w1: 12,
                            width_w2: 12,
                            thickness: 1,
                            length: 20
                        },
                        joint_designs: [
                            'bead_on_plate',
                            'bevel_groove',
                            'compound_bevel',
                            'j_groove',
                            'u_groove',
                            'v_groove'
                        ]
                    },
                    {
                        value: 't_plate', title: 'T-Plate',
                        dimensions: {
                            thickness_t1: 0.5,
                            thickness_t2: 0.5,
                            width_w1: 6,
                            width_w2: 6,
                            length_l: 20,
                            height_h: 4
                        }
                    },
                    {
                        value: 'pipe', title: 'Pipe',
                        dimensions: {
                            outer_diameter: 36,
                            wall_thickness: 1,
                            length_w1: 16,
                            length_w2: 16
                        }
                    },
                    {
                        value: 't_pipe', title: 'T-Pipe',
                        dimensions: {
                            outer_diameter: 36,
                            wall_thicknes_t1: 0.5,
                            flange_thickness_t2: 0.5,
                            length_w1: 6,
                            length_w2: 6,
                            flange_height_h: 2
                        }
                    },
                    {value: 'lap_joint', title: 'Lap Joint'}
                ],
                selected: 'plate'
            },
            joint_data: {
                joint_designs: [
                    {
                        value: 'bead_on_plate', title: 'Bead-on-Plate',
                        dimensions: {}
                    },
                    {value: 'bevel_groove', title: 'Bevel-Groove'},
                    {value: 'compound_bevel', title: 'Compund Bevel'},
                    {value: 'j_groove', title: 'J-Groove'},
                    {value: 'u_groove', title: 'U-Groove'},
                    {value: 'v_groove', title: 'V-Groove'},
                    {value: 't_bevel', title: 'T-Bevel'}
                ],
                selected: 'bead_on_plate',
                root_gap: {
                    present: 'false',
                    range: 0.04
                },
                joint_angle: {
                    alpha: 0.1,
                    beta: 4.0
                }
            },
            bead_data: {
                bead_types: [
                    {
                        value: 'parabolic', title: 'Parabolic',
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
                        }
                    },
                    {
                        value: 'elliptical', title: 'Elliptical',
                        dimensions: {
                            x: 0.0,
                            y: 0.35,
                            z1: 0.0,
                            z2: 4.0,
                            w: 0.3,
                            h: 0.0,
                            r: 0.0
                        }
                    },
                    {
                        value: 'points', title: 'Complex Shape',
                        dimensions: {
                            x: 0.0,
                            y: 0.35,
                            z1: 0.0,
                            z2: 4.0,
                            w: 0.3,
                            points: [0.45,0.66,0.39,0.6,0.32,0.56,0.24,0.52,0.18,0.5,0.11,0.48,0.06,0.4,0,0.34,-0.07,0.28,-0.13,0.27,-0.2,0.27,-0.29,0.3,-0.36,0.37,-0.41,0.44,-0.43,0.5,-0.47,0.54,-0.56,0.58,-0.66,0.63,-0.7,0.71,-0.64,0.73,-0.54,0.76,-0.43,0.77,-0.35,0.78,-0.24,0.8,-0.18,0.81,-0.08,0.8,0.05,0.79,0.17,0.76,0.3,0.72,0.37,0.7,0.45,0.66],
                            r: 0.0
                        }
                    }
                ],
                selected: 'parabolic',
                beads: {},
                num_beads: 0
            },
            material_data: {
                base_material1: {
                    selected: 'X65'
                },
                base_material2: {
                    selected: 'X65'
                },
                filler_material: {
                    selected: 'MIL-100S-1'
                },
                base_material_types: [
                    'A572', 'AH36', 'AISI-1018', 'AISI-4140', 'AISI-8620', 'Alloy-625', 'Aluminum-4043', 'Aluminum-6061', 'ASTM2.25Cr-1.0Mo', 'ASTM516Grade60', 'ASTM516Grade70', 'ASTM_P91_9Cr-1Mo-V-Nb', 'DH36', 'DP600', 'DP780', 'HSLA-65', 'HSLA-80', 'HSLA', 'HY-100', 'HY-80', 'Inconel-600', 'Inconel-625', 'M190', 'Mild', 'Stainless-304', 'Ti-6Al-4V', 'Titanium_CP', 'X65'
                ],
                friction_stir_material_types: [
                    'AA7075', 'AZ31B'
                ],
                filler_material_types: [
                    'E11018', 'E308-T1-X', 'E308L-16', 'E7018', 'E71T-1', 'E71T8-K6', 'E8010-P1', 'E8018-G', 'E8018B3L', 'E91T1-B3L', 'ER120S-1', 'ER308L', 'ER70S-3', 'ER70S-6', 'ER80S-D2', 'ER90S-B9', 'ERTi-2', 'ERTi-5', 'F7A2-EM12K', 'F9P0-EB3-B3', 'HSLA-100', 'MIL-100S-1'
                ]
            },
            procedure_data: {
                pre_heat_temp_F: 70,
                pre_heat_temp_C: 21,
                inter_pass_temp_F: 212,
                inter_pass_temp_C: 100,
                weld_passes: [
                    {
                        current_A: 180,
                        voltage_V: 19,
                        travel_ipm: 7.8
                    },
                    {
                        current_A: 200,
                        voltage_V: 22.5,
                        travel_ipm: 7.5
                    }
                ]
            },
            fixture_data: {
                clamps: [],
                coolers: [],
                monitors: []
            }
        }, methods: {
            saveSimulation: function() {
                if (simulation_id == null) {
                    // Create a new Simulation
                    // TODO Add a "processing" notice for the user
                    axios.post(Routes.simulations_path({format: 'json'}), { simulation_data: vm.$root.$data, authenticity_token: AUTH_TOKEN })
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
                    axios.put(Routes.simulation_path(simulation_id, {format: 'json'}), { simulation_data: vm.$root.$data, authenticity_token: AUTH_TOKEN })
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

    if (simulation_id != null) {
        console.log("Loading simulation from server");
        // TODO Add a "processing" notice for the user
        axios.get(Routes.simulation_path(simulation_id, {format: 'json'}))
            .then(function (response) {
                console.log(response);
                setInitialVueState(vm, response.data.job_cache)
            })
            .catch(function (error) {
                // TODO Handle error
                console.log(error);
            })
    };

    render_three_shape();

    $('#form-submit-button').on('click', function () {
            vm.saveSimulation();
        }
    );

});

// Used to assign data to the vue object particularily from an initial load.
//   Vue disallows setting $root.$data directly, so we need to add it piecemeal.
//
// @param { Object } vue_instance An instance of a vue object
// @param { Object } jobcache A json object corresponding to the desired data state
function setInitialVueState(vue_instance, jobcache) {
    vue_instance.$data.start_panel_data = jobcache.start_panel_data;
    vue_instance.$data.technique_data = jobcache.technique_data;
    vue_instance.$data.procedure_data = jobcache.procedure_data;
    vue_instance.$data.material_data = jobcache.material_data;
    vue_instance.$data.joint_data = jobcache.joint_data;
    vue_instance.$data.fixture_data = jobcache.fixture_data;
    vue_instance.$data.dimension_data = jobcache.dimension_data;
    vue_instance.$data.bead_data = jobcache.bead_data;
}
