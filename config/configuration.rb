# app specific configuration
class Configuration
  class << self
    attr_writer :mesh_upload_enabled

    def mesh_upload_enabled?
      return @mesh_upload_enabled if defined? @mesh_upload_enabled
      ENV['MESH_UPLOAD_ENABLED'].present?
    end
    alias_method :mesh_upload_enabled, :mesh_upload_enabled?
  end
end
