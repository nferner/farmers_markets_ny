# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CSV.foreach("./lib/assets/Farmers_Markets_in_New_York_State_API.csv", headers: true) do |row|
  Market.create({
    market: row["Market Name"],
    address: row["Address Line 1"],
    city: row["City"],
    zip: row["Zip"],
    link: row["Market Link"],
    hours: row["Operation Hours"],
    season: row["Operation Season"],
    latitude: row["Latitude"],
    longitude: row["Longitude"]
    })
end
