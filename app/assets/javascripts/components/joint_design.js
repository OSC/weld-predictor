/*
Vue.component('joint-design', {
    template: `
          <div class="panel panel-default">
            <div class="panel-heading" data-toggle="collapse" data-parent="#accordion" data-target="#collapse-geometry">
              <h4 class="panel-title">Weld Geometry</h4>
            </div>
            <div id="collapse-geometry" class="panel-collapse collapse">
              <div class="panel-body">
                <div class="form-group">
                  <label for="joint-design">Joint Design:</label>
                  <select v-model="selected" class="form-control" id="joint-design">
                    <option v-for="joint_design in joint_designs" v-bind:value="joint_design.value">
                      {{ joint_design.title }} 
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>            
        `,
    data() {
        return {
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
});
*/
