class AddingIndexes < ActiveRecord::Migration[6.0]
  def change
    add_index :likes, :liker_id
    add_index :likes, :liked_id
  end
end
