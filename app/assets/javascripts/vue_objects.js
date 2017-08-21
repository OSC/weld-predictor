var vm;

$(document).ready(function () {

    vm = new Vue({
        el: '#vue-app',
        data: {
            start_panel_data: {
                user_name: current_user,
                job_description: ''
            },
            fixture_data: {
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
                selected: 'bead_on_plate'
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
            }
        }
    })

    render_three_shape();
})
