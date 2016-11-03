class Market < ActiveRecord::Base
  def initialize(params: {})
    @market = params["market"]
    @address = params["address"]
    @city = params["city"]
    @zip = params["zip"]
    @link = params["link"]
    @hours = params["hours"]
    @season = params["season"]
    @latitude = params["latitude"]
    @longitude = params["longitude"]
  end
end
