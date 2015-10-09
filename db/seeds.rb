# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
bench_1 = Bench.create!(description: 'comfortable bench in the park', lat: 37.7697 , lng: -122.4769)
bench_2 = Bench.create!(description: 'nice bench on market street', lat: 37.7833 , lng: -122.4167)
bench_3 = Bench.create!(description: 'awesome bench in shoreline', lat: 37.4270 , lng: -122.0854)
