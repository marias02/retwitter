class ChangeFollowingIdIndexAndFollowerIdIndexNotUniqueAnymore < ActiveRecord::Migration[6.0]
  def change
    remove_index :friendships, :follower_id
    remove_index :friendships, :followed_id
  end
end
