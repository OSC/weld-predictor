Vue.mixin({
    computed: {

        baseMaterialTypes: function () {
            return [
                'A572', 'AH36', 'AISI-1018', 'AISI-4140', 'AISI-8620', 'Alloy-625', 'Aluminum-4043', 'Aluminum-6061', 'ASTM2.25Cr-1.0Mo', 'ASTM516Grade60', 'ASTM516Grade70', 'ASTM_P91_9Cr-1Mo-V-Nb', 'DH36', 'DP600', 'DP780', 'HSLA-65', 'HSLA-80', 'HSLA', 'HY-100', 'HY-80', 'Inconel-600', 'Inconel-625', 'M190', 'Mild', 'Stainless-304', 'Ti-6Al-4V', 'Titanium_CP', 'X65'
            ]
        },

        frictionStirMaterialTypes: function() {
            return [
                'AA7075', 'AZ31B'
            ]
        },

        fillerMaterialTypes: function () {
            return [
                'E11018', 'E308-T1-X', 'E308L-16', 'E7018', 'E71T-1', 'E71T8-K6', 'E8010-P1', 'E8018-G', 'E8018B3L', 'E91T1-B3L', 'ER120S-1', 'ER308L', 'ER70S-3', 'ER70S-6', 'ER80S-D2', 'ER90S-B9', 'ERTi-2', 'ERTi-5', 'F7A2-EM12K', 'F9P0-EB3-B3', 'HSLA-100', 'MIL-100S-1'
            ]
        }
    }
});


