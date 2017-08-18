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
                    {value: 'plate', title: 'Plate'},
                    {value: 't_plate', title: 'T-Plate'},
                    {value: 'pipe', title: 'Pipe'},
                    {value: 't_pipe', title: 'T-Pipe'},
                    {value: 'lap_joint', title: 'Lap Joint'}
                ],
                selected: 'plate'
            },
            joint_data: {
                joint_designs: [
                    {value: 'bead_on_plate', title: 'Bead-on-Plate'},
                    {value: 'bevel_groove', title: 'Bevel-Groove'},
                    {value: 'compound_bevel', title: 'Compund Bevel'},
                    {value: 'j_groove', title: 'J-Groove'},
                    {value: 'u_groove', title: 'U-Groove'},
                    {value: 'v_groove', title: 'V-Groove'},
                    {value: 't_bevel', title: 'T-Bevel'}
                ],
                selected: 'bead_on_plate'
            }
        }
    })

    render_three_shape();
})
