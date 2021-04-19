class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :tweete_id
      t.string :comment
      t.integer :user_id

      t.timestamps
    end

    add_index :comments, :tweete_id, unique: true
    add_index :comments, :user_id, unique: true
  end
end
