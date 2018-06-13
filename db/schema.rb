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

ActiveRecord::Schema.define(version: 2018_06_13_050805) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title", null: false
    t.integer "sport", default: 0, null: false
    t.datetime "date", null: false
    t.integer "duration"
    t.float "distance"
    t.float "elevation"
    t.integer "route_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.time "time"
    t.index ["date"], name: "index_activities_on_date"
    t.index ["route_id"], name: "index_activities_on_route_id"
    t.index ["user_id"], name: "index_activities_on_user_id"
  end

  create_table "routes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title", null: false
    t.integer "distance", null: false
    t.float "elevation", null: false
    t.text "polyline_string", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sport", default: 0, null: false
    t.text "description"
    t.string "origin", null: false
    t.string "destination", null: false
    t.index ["user_id"], name: "index_routes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.date "birth_date"
    t.index ["username"], name: "index_users_on_username"
  end

end
