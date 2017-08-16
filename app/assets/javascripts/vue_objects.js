var vm;

$(document).ready(function () {

    vm = new Vue({
        el: '#vue-app',
        data: {
            user_name: current_user
        }
    })

    render_three_shape();
})
