class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :liked_id
      t.integer :liker_id

      t.timestamps
    end

    add_index :likes, [:liked_id, :liker_id], unique: true
    add_index :likes, :liker_id, unique: true
    add_index :likes, :liked_id, unique: true
  end
end
