class CreateRetweetes < ActiveRecord::Migration[6.0]
  def change
    create_table :retweetes do |t|
      t.integer :retweete_id
      t.integer :retweeted_id
      t.string :quote

      t.timestamps
    end

    add_index :retweetes, [:retweete_id, :retweeted_id], unique: true
  end
end
