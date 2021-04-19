class CreateFriendshipRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :friendship_requests do |t|
      t.integer :requester_id
      t.integer :requested_id

      t.timestamps
    end

    add_index :friendship_requests, :requester_id, unique: true
    add_index :friendship_requests, :requested_id, unique: true
    add_index :friendship_requests, [:requester_id, :requested_id], unique: true
  end
end
