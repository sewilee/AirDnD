class UpdateReviewsTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :rating, :total_r
    add_column :reviews, :communication_r, :integer
    add_column :reviews, :gameplay_r, :integer
    add_column :reviews, :story_r, :integer
    add_column :reviews, :roleplay_r, :integer
    add_column :reviews, :combat_r, :integer
    add_column :reviews, :dm_r, :integer
  end
end
