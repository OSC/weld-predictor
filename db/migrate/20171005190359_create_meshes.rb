class CreateMeshes < ActiveRecord::Migration
  def change
    create_table :meshes do |t|
      t.string :title
      t.string :stl_files, array: true, default: []

      t.timestamps null: false
    end
  end
end
