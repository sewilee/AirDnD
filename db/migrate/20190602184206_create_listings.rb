class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.text :description
      t.integer :rate, null: false

      t.string :city, null: false
      t.string :address, null: false, unique: true
      t.string :location_type, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false

      t.integer :num_bath, null: false
      t.string :expansion, null: false
      t.integer :edition_num, null: false
      t.string :language
      
      t.integer :min_players
      t.integer :max_players, null: false
      
      t.timestamps
    end

    add_index(:listings, :host_id)
    add_index(:listings, :city)
    add_index(:listings, :address, unique: true)
  end
end
