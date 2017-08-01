class CreateSimulationJobs < ActiveRecord::Migration
  def change
    create_table :simulation_jobs do |t|
      t.references :simulation, index: true, foreign_key: true
      t.string :status
      t.text :job_cache

      t.timestamps
    end
  end
end
