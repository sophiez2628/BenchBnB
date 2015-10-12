class Api::BenchController < ApplicationController
  def index
    benches = Bench.in_bounds(params[:bounds])
    render json: benches
  end

  def create
    lat = params[:lat].to_f
    lng = params[:lng].to_f
    description = params[:description]
    bench = Bench.new({lat: lat, lng: lng, description: description})
    if bench.save
      render json: bench
    else
      render json: bench.errors.full_messages
    end
  end


end
