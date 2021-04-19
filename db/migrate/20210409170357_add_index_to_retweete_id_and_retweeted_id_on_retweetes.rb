class AddIndexToRetweeteIdAndRetweetedIdOnRetweetes < ActiveRecord::Migration[6.0]
  def change
    add_index :retweetes, :retweete_id, unique: true
    add_index :retweetes, :retweeted_id, unique: true
  end
end
