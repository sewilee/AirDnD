class ChangeReviewsTableNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :communication_r, false
    change_column_null :reviews, :gameplay_r, false
    change_column_null :reviews, :story_r, false
    change_column_null :reviews, :roleplay_r, false
    change_column_null :reviews, :combat_r, false
    change_column_null :reviews, :dm_r, false
  end
end
