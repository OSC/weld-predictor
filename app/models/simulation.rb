class Simulation < ActiveRecord::Base
  has_many :simulation_jobs, dependent: :destroy
  has_machete_workflow_of :simulation_jobs


  store :job_cache, coder: JSON, accessors: [:data]

  # Name that defines the template/target dirs
  def staging_template_name
    "simulation"
  end

  def data
    JSON.parse super
  end

  # Define tasks to do after staging template directory typically copy over
  # uploaded files here
  def after_stage(staged_dir)
    # create input.json in the root of the staged directory
    staged_dir.join("input.json").open("w") { |f| f.write(data) }

    # run substitute.py to do domain specific calculations and substitutions
    # TODO Implement Python functionality
    #cmd = "#{Python.exec} #{Shellwords.escape(Rails.root.join("lib", "python", "stage", "eweld_substitute.py"))} #{Shellwords.escape(staged_dir.to_s)}"
    #stdout, stderr, status = Open3.capture3 cmd

    #Rails.logger.debug "cmd: #{cmd} exited with #{status} and error: #{stderr}" unless status.exitstatus == 0

    # FIXME: raise error if substitute script fails...
  end

  # Build an array of Machete jobs that are then submitted to the batch server
  def build_jobs(staged_dir, job_list = [])
    job_list << OSC::Machete::Job.new(script: staged_dir.join("main.sh"))
  end

  # Make copy of workflow
  def copy
    self.dup
  end
end
