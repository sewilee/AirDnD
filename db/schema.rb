# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_02_195620) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "title", null: false
    t.text "description"
    t.integer "rate", null: false
    t.string "city", null: false
    t.string "address", null: false
    t.string "location_type", null: false
    t.float "longitude", null: false
    t.float "latitude", null: false
    t.integer "num_bath", null: false
    t.string "expansion", null: false
    t.integer "edition_num", null: false
    t.string "language"
    t.integer "min_players"
    t.integer "max_players", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address"], name: "index_listings_on_address", unique: true
    t.index ["city"], name: "index_listings_on_city"
    t.index ["host_id"], name: "index_listings_on_host_id"
    t.index ["latitude", "longitude"], name: "by_lat_long", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "img_url"
    t.date "birthday", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
