class ChangeFollowingIdAndFollowerIdNotUnique < ActiveRecord::Migration[6.0]
  def change
    change_column :friendships, :follower_id, :integer, unique: :false
    change_column :friendships, :followed_id, :integer, unique: :false
  end
end
