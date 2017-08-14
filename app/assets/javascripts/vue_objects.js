var viewcomp;

$(document).ready(function () {

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
    })

    Vue.component('fixture-shape', {
        template: `
            <div class="panel panel-default">
              <div class="panel-heading" data-toggle="collapse" data-parent="#accordion" data-target="#collapse-dimensions">
                <h4 class="panel-title">Fixture Shape</h4>
              </div>
              <div id="collapse-dimensions" class="panel-collapse collapse">
                <div class="panel-body">
                  <div class="form-group">
                    <label for="fixture-shape">Fixture Shape:</label>
                    <select v-model="selected" class="form-control" id="fixture-shape">
                      <option v-for="fixture_shape in fixture_shapes" v-bind:value="fixture_shape.value">
                        {{ fixture_shape.title }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>            
        `,
        data() {
            return {
                fixture_shapes: [
                    {value: 'plate', title: 'Plate'},
                    {value: 't_plate', title: 'T-Plate'},
                    {value: 'pipe', title: 'Pipe'},
                    {value: 't_pipe', title: 'T-Pipe'},
                    {value: 'lap_joint', title: 'Lap Joint'}
                ],
                selected: 'plate'
            }
        }
    })

    viewcomp = new Vue({
        el: '#vue-app'
    })

    render_three_shape();
})
