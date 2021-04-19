class CreateBookmarks < ActiveRecord::Migration[6.0]
  def change
    create_table :bookmarks do |t|
      t.integer :bookmarker_id
      t.integer :bookmarked_id

      t.timestamps
    end

    add_index :bookmarks, :bookmarker_id, unique: true
    add_index :bookmarks, :bookmarked_id, unique: true
    add_index :bookmarks, [:bookmarker_id, :bookmarked_id], unique: true
  end
end
