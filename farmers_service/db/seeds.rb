require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'Farmers_Markets_in_New_York_State_API.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = market.new
  t.county = row['County']
  t.market = row['Market Name']
  t.location = row['Location']
  t.address = row['Address Line 1']
  t.city = row['City']
  t.state = row['State']
  t.zip = row['Zip']
  t.contact = row['Contact']
  t.phone = row['Phone']
  t.website = row['Market Link']
  t.hours = row['Operation Hours']
  t.season = row['Operation Season']
  t.fmnp = row['FMNP']
  t.months = row['Operating Months']
  t.latitude = row['Latitude']
  t.longitude = row['Longitude']
  t.ebt = ['EBT/SNAP']
  t.points = row['Location Points']
  t.save
  puts "#{t.market}, #{t.address}, #{t.zip}, #{t.website}, #{t.hours}, #{t.season}, #{t.points}, #{t.location} saved"
end

puts "There are now #{market.count} rows in the markets table"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
