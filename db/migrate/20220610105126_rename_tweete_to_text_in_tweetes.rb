class RenameTweeteToTextInTweetes < ActiveRecord::Migration[6.0]
  def change
    rename_column :tweetes, :tweete, :text
  end
end
