class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.string :title
      t.string :description
      t.boolean :hidden
      t.integer :membership_id
      t.integer :owner_id

      t.timestamps
    end
  end
end
