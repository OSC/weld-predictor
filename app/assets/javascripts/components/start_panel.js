/*
Vue.component('start-panel', {
    template: `
          <div class="panel-body">    
            <div class="form-group">
              <label for="username">User Name:</label>
              <input v-model:value="start_panel_data.user_name" class="form-control" id="username" disabled/>
            </div>
            <div class="form-group">
              <label for="eweld_job_description">Description:</label>              
              <input v-model:value="start_panel_data.job_description" class="form-control" id="eweld_job_description" placeholder="Provide Job Description"
            maxlength="50" />
            </div>
            <div class="form-group">
              <label for="walltime_requested">Walltime (1 to 10 hours):</label>
              <input class="form-control" id="walltime_requested" type="number" value="1" min="1" max="10" />
            </div>
            <div class="form-group">
              <label for="weld-technique">Weld Technique:</label>
              <select class="form-control" id="weld-technique">
                <option>GMAW</option>
                <option>LBW</option>
                <option>HLAW</option>
                <option>Pulsed GMAW</option>
                <option>Weaved Pulsed GMAW</option>
                <option>GTAW</option>
                <option>SAW</option>
                <option>SMAW</option>
              </select>
            </div>
          </div>
        `,
    props: {
        user_name: {
            type: String,
            required: true
        }
    },
    data: function () {
        return {
            start_panel_data: {
                user_name: this.user_name,
                job_description: this.job_description
            }
        }
    },
    computed: {
        updated() {
            return {
                start_panel_data: {
                    user_name: this.start_panel_data.user_name,
                    job_description: this.start_panel_data.job_description
                }
            }
        }
    },
    watch: {
        updated() {
            this.$emit('changed', this.updated);
        }
    }
});


*/
