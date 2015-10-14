class Api::BenchController < ApplicationController
  def index
    benches = Bench.in_bounds(params[:bounds])

    if !params[:min].nil?
      benches = benches.select { |bench| bench.seating >= params[:min].to_i }
    end

    if !params[:max].nil?
      puts "hello"
      benches = benches.select { |bench| bench.seating <= params[:max].to_i }
    end



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
