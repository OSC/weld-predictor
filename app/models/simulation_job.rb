class SimulationJob < ActiveRecord::Base
  include OscMacheteRails::Statusable

  belongs_to :simulation

  # Determine if the results are valid
  # def results_valid?
  #   # CODE GOES HERE
  # end
end
