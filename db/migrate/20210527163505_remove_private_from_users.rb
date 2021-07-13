class RemovePrivateFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :private, :boolean
    add_column :users, :private, :boolean, default: false
  end
end
