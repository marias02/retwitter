class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.date :birthdate
      t.string :password_digest
      t.string :username
      t.boolean :private

      t.timestamps
    end
  end
end
