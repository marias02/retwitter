class RemovingUnnecessary < ActiveRecord::Migration[6.0]
  def change
    remove_index :likes, :liker_id
    remove_index :likes, :liked_id
  end
end
