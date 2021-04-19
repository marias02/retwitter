class CreateTweetes < ActiveRecord::Migration[6.0]
  def change
    create_table :tweetes do |t|
      t.integer :user_id
      t.string :tweete

      t.timestamps
    end
  end
end
