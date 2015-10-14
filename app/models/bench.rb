# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :text             not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
    lat_one = (bounds[:northEast][:lat]).to_f
    lat_two = (bounds[:southWest][:lat]).to_f
    lng_one = (bounds[:northEast][:lng]).to_f
    lng_two = (bounds[:southWest][:lng]).to_f

    if lat_one > lat_two
      min_lat = lat_two
      max_lat = lat_one
    else
      min_lat = lat_one
      max_lat = lat_two
    end

    if lng_one > lng_two
      min_lng = lng_two
      max_lng = lng_one
    else
      min_lng = lng_one
      max_lng = lng_two
    end

    benches = Bench.where(lat: min_lat..max_lat, lng: min_lng..max_lng)

  end
end
