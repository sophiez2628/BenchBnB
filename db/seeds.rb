# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
bench_1 = Bench.create!(description: 'comfortable bench in the park', lat: 37.7697 , lng: 122.4769)
bench_2 = Bench.create!(description: 'nice bench on market street', lat: 40.7697 , lng: 135.4769)
