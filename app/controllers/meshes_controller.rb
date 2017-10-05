class MeshesController < ApplicationController
  before_action :set_mesh, only: [:show, :edit, :update, :destroy]

  # GET /meshes
  # GET /meshes.json
  def index
    @meshes = Mesh.all
  end

  # GET /meshes/1
  # GET /meshes/1.json
  def show
  end

  # GET /meshes/new
  def new
    @mesh = Mesh.new
  end

  # GET /meshes/1/edit
  def edit
  end

  # POST /meshes
  # POST /meshes.json
  def create
    @mesh = Mesh.new(mesh_params)

    respond_to do |format|
      if @mesh.save
        format.html { redirect_to @mesh, notice: 'Mesh was successfully created.' }
        format.json { render :show, status: :created, location: @mesh }
      else
        format.html { render :new }
        format.json { render json: @mesh.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /meshes/1
  # PATCH/PUT /meshes/1.json
  def update
    respond_to do |format|
      if @mesh.update(mesh_params)
        format.html { redirect_to @mesh, notice: 'Mesh was successfully updated.' }
        format.json { render :show, status: :ok, location: @mesh }
      else
        format.html { render :edit }
        format.json { render json: @mesh.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /meshes/1
  # DELETE /meshes/1.json
  def destroy
    @mesh.destroy
    respond_to do |format|
      format.html { redirect_to meshes_url, notice: 'Mesh was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mesh
      @mesh = Mesh.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mesh_params
      params.require(:mesh).permit(:title, :stl_files)
    end
end
