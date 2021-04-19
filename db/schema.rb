# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_09_172223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookmarks", force: :cascade do |t|
    t.integer "bookmarker_id"
    t.integer "bookmarked_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bookmarked_id"], name: "index_bookmarks_on_bookmarked_id", unique: true
    t.index ["bookmarker_id", "bookmarked_id"], name: "index_bookmarks_on_bookmarker_id_and_bookmarked_id", unique: true
    t.index ["bookmarker_id"], name: "index_bookmarks_on_bookmarker_id", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.integer "tweete_id"
    t.string "comment"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tweete_id"], name: "index_comments_on_tweete_id", unique: true
    t.index ["user_id"], name: "index_comments_on_user_id", unique: true
  end

  create_table "friendship_requests", force: :cascade do |t|
    t.integer "requester_id"
    t.integer "requested_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["requested_id"], name: "index_friendship_requests_on_requested_id", unique: true
    t.index ["requester_id", "requested_id"], name: "index_friendship_requests_on_requester_id_and_requested_id", unique: true
    t.index ["requester_id"], name: "index_friendship_requests_on_requester_id", unique: true
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "follower_id"
    t.integer "followed_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["followed_id"], name: "index_friendships_on_followed_id", unique: true
    t.index ["follower_id", "followed_id"], name: "index_friendships_on_follower_id_and_followed_id", unique: true
    t.index ["follower_id"], name: "index_friendships_on_follower_id", unique: true
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liked_id"
    t.integer "liker_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["liked_id", "liker_id"], name: "index_likes_on_liked_id_and_liker_id", unique: true
    t.index ["liked_id"], name: "index_likes_on_liked_id", unique: true
    t.index ["liker_id"], name: "index_likes_on_liker_id", unique: true
  end

  create_table "lists", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.boolean "hidden"
    t.integer "membership_id"
    t.integer "owner_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "memberships", force: :cascade do |t|
    t.integer "list_id"
    t.integer "member_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "messages", force: :cascade do |t|
    t.string "message"
    t.integer "transmitter_id"
    t.integer "receiver_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "retweetes", force: :cascade do |t|
    t.integer "retweete_id"
    t.integer "retweeted_id"
    t.string "quote"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["retweete_id", "retweeted_id"], name: "index_retweetes_on_retweete_id_and_retweeted_id", unique: true
    t.index ["retweete_id"], name: "index_retweetes_on_retweete_id", unique: true
    t.index ["retweeted_id"], name: "index_retweetes_on_retweeted_id", unique: true
  end

  create_table "tweetes", force: :cascade do |t|
    t.integer "user_id"
    t.string "tweete"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "email"
    t.date "birthdate"
    t.string "password_digest"
    t.string "username"
    t.boolean "private"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
