class AddNotUniqueIndexToFollowingAndFollower < ActiveRecord::Migration[6.0]
  def change
    add_index :friendships, :follower_id, unique: false
    add_index :friendships, :followed_id, unique: false
  end
end
