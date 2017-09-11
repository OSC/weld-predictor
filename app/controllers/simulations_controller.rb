class SimulationsController < ApplicationController
  before_action :set_simulation, only: [:show, :edit, :update, :destroy, :submit, :copy]

  # GET /simulations
  # GET /simulations.json
  def index
    @simulations = Simulation.preload(:simulation_jobs)
  end

  # GET /simulations/1
  # GET /simulations/1.json
  def show
  end

  # GET /simulations/new
  def new
    @simulation = Simulation.new
  end

  # GET /simulations/1/edit
  def edit
  end

  # POST /simulations
  # POST /simulations.json
  def create
    @simulation = Simulation.new
    @simulation.data = simulation_params

    respond_to do |format|
      if @simulation.save
        format.html { redirect_to @simulation, notice: 'Simulation was successfully created.' }
        format.json { render :show, status: :created, location: @simulation }
      else
        format.html { render :new }
        format.json { render json: @simulation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /simulations/1
  # PATCH/PUT /simulations/1.json
  def update
    respond_to do |format|
      if @simulation.update(data: simulation_params)
        format.html { redirect_to @simulation, notice: 'Simulation was successfully updated.' }
        format.json { render :show, status: :ok, location: @simulation }
      else
        format.html { render :edit }
        format.json { render json: @simulation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /simulations/1
  # DELETE /simulations/1.json
  def destroy
    respond_to do |format|
      if @simulation.destroy
        format.html { redirect_to simulations_url, notice: 'Simulation was successfully destroyed.' }
        format.json { head :no_content }
      else
        format.html { redirect_to simulations_url, alert: "Simulation failed to be destroyed: #{@simulation.errors.to_a}" }
        format.json { render json: @simulation.errors, status: :internal_server_error }
      end
    end
  end

  # PUT /simulations/1/submit
  # PUT /simulations/1/submit.json
  def submit
    respond_to do |format|
      if @simulation.submitted?
        format.html { redirect_to simulations_url, alert: 'Simulation has already been submitted.' }
        format.json { head :no_content }
      elsif @simulation.submit
        format.html { redirect_to simulations_url, notice: 'Simulation was successfully submitted.' }
        format.json { head :no_content }
      else
        format.html { redirect_to simulations_url, alert: "Simulation failed to be submitted: #{@simulation.errors.to_a}" }
        format.json { render json: @simulation.errors, status: :internal_server_error }
      end
    end
  end

  # PUT /simulations/1/copy
  def copy
    @simulation = @simulation.copy

    respond_to do |format|
      if @simulation.save
        format.html { redirect_to @simulation, notice: 'Simulation was successfully copied.' }
        format.json { render :show, status: :created, location: @simulation }
      else
        format.html { redirect_to simulations_url, alert: "Simulation failed to be copied: #{@simulation.errors.to_a}" }
        format.json { render json: @simulation.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_simulation
      @simulation = Simulation.preload(:simulation_jobs).find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def simulation_params
      params.require(:simulation_data)
    end
end
