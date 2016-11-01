class CreateMarketList < ActiveRecord::Migration[5.0]
  def change
    create_table :market_lists do |t|
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
    end
  end
end
