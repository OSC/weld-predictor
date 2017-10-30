// This is a global mixin, it is applied to every vue instance
Vue.mixin({
    data: function() {
        return {
            get techniqueData() {
                return [
                    { value: 'gmaw', title: 'GMAW' },
                    { value: 'lbw', title: 'LBW' },
                    { value: 'hlaw', title: 'HLAW' },
                    { value: 'pulsed_gmaw', title: 'Pulsed GMAW' },
                    { value: 'weaved_pulsed_gmaw', title: 'Weaved Pulsed GMAW' },
                    { value: 'gtaw', title: 'GTAW' },
                    { value: 'saw', title: 'SAW' },
                    { value: 'smaw', title: 'SMAW' }
                ]
            }
        }
    }
});
