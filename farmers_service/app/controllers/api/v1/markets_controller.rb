class Api::V1::MarketsConstroller < ApplicationController

  def index
    @markets = Market.all.includes(:address, :city, :zip, :link, :hours, :season, :latitude, :longitude)
    render json: @markets, include: [:addresses, :cities, :zips, :links, :hours, :seasons, :latitudes, :longitudes]
  end

  def show
    render json: @markets, include: [:addresses, :cities, :zips, :links, :hours, :seasons, :latitudes, :longitudes]
  end
end
