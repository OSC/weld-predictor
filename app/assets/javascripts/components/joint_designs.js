// This is a global mixin, it is applied to every vue instance
Vue.mixin({
    computed: {
        jointDesigns: function() {
            return [
                {
                    value: 'bead_on_plate', title: 'Bead-on-Plate',
                    gap: false
                },
                {
                    value: 'bevel_groove', title: 'Bevel-Groove',
                    gap: true
                },
                {
                    value: 'compound_bevel', title: 'Compund Bevel',
                    gap: true
                },
                {
                    value: 'j_groove', title: 'J-Groove',
                    gap: true
                },
                {
                    value: 'u_groove', title: 'U-Groove',
                    gap: true
                },
                {
                    value: 'v_groove', title: 'V-Groove',
                    gap: true
                },
                {
                    value: 't_bevel', title: 'T-Bevel',
                    gap: true
                },
                {
                    value: 'lap_bevel', title: 'Lap Bevel',
                    gap: true
                }
            ]
        }
    }
});


