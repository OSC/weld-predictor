class Simulation < ActiveRecord::Base
  has_many :simulation_jobs, dependent: :destroy
  has_machete_workflow_of :simulation_jobs

  attr_accessor :data

  # Name that defines the template/target dirs
  def staging_template_name
    "simulation"
  end

  # Define tasks to do after staging template directory typically copy over
  # uploaded files here
  # def after_stage(staged_dir)
  #   # CODE HERE
  # end

  # Build an array of Machete jobs that are then submitted to the batch server
  def build_jobs(staged_dir, job_list = [])
    job_list << OSC::Machete::Job.new(script: staged_dir.join("main.sh"))
  end

  # Make copy of workflow
  def copy
    self.dup
  end
end
