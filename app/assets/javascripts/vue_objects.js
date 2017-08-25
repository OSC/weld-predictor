var vm;

$(document).ready(function () {

    vm = new Vue({
        el: '#vue-app',
        data: {
            start_panel_data: {
                user_name: current_user,
                job_description: '',
                walltime_hours: 1
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
                    {value: 't_plate', title: 'T-Plate'},
                    {value: 'pipe', title: 'Pipe'},
                    {value: 't_pipe', title: 'T-Pipe'},
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
                backing_bar: {
                    present: 'false',
                    height: 0.5,
                    width: 4.0
                },
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
                            w: 0.3,
                            a: 0.0,
                            b: 0.1,
                            c: 0.0,
                            d: -0.15,
                            r: 0.0
                        }
                    },
                    {value: 'elliptical', title: 'Elliptical'},
                    {value: 'custom', title: 'Custom'}
                ],
                beads: {}
            },
            material_data: {
                base_material1: {
                    type: 'HSLA-100'
                },
                base_material2: {
                    type: 'X65'
                },
                filler_material: {
                    type: 'MIL-100S-1'
                }
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
        }
    });

    render_three_shape();

    $('#form-submit-button').on('click', function () {

            console.log(vm.$root.$data);
            post(Routes.simulations_path(), {simulation_data: vm.$root.$data });
        }
    );

});

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", JSON.stringify(params[key]));

            form.appendChild(hiddenField);
        }
    }

    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "authenticity_token");
    hiddenField.setAttribute("value", AUTH_TOKEN);
    form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
}
