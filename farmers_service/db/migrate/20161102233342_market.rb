class Market < ActiveRecord::Migration[5.0]
  def change
    create_table :markets do |t|
      t.string :market
      t.string :address
      t.string :city
      t.integer :zip
      t.string :link
      t.string :hours
      t.string :season
      t.decimal :latitude
      t.decimal :longitude
    end
  end
end
