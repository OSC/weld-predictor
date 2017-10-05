class AddAttachmentInputfileToMeshes < ActiveRecord::Migration
  def self.up
    change_table :meshes do |t|
      t.attachment :inputfile
    end
  end

  def self.down
    remove_attachment :meshes, :inputfile
  end
end
