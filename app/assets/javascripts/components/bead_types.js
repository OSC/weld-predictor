// This is a global mixin, it is applied to every vue instance
Vue.mixin({
    computed: {
        beadTypes: function() {
            return [
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
                    },
                    weld_pass: {
                        current_A: 200.0,
                        voltage_V: 22.5,
                        travel_ipm: 7.5
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
                    },
                    weld_pass: {
                        current_A: 200.0,
                        voltage_V: 22.5,
                        travel_ipm: 7.5
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
                    },
                    weld_pass: {
                        current_A: 200.0,
                        voltage_V: 22.5,
                        travel_ipm: 7.5
                    }
                }
            ]
        },
        beadElliptical: function () {
            return this.beadTypes.find(type => type.value === 'elliptical');
        },
        beadParabolic: function () {
            return this.beadTypes.find(type => type.value === 'parabolic');
        },
        beadComplex: function () {
            return this.beadTypes.find(type => type.value === 'points');
        }
    }
});
