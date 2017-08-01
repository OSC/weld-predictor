class CreateSimulations < ActiveRecord::Migration
  def change
    create_table :simulations do |t|
      t.string :status
      t.text :job_cache
      t.string :staged_dir

      t.timestamps
    end
  end
end
