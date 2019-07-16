class RenameReviewColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :total_r, :rating
    rename_column :reviews, :communication_r, :communication
    rename_column :reviews, :gameplay_r, :gameplay
    rename_column :reviews, :story_r, :story
    rename_column :reviews, :roleplay_r, :roleplay
    rename_column :reviews, :combat_r, :combat
    rename_column :reviews, :dm_r, :dm
  end
end
