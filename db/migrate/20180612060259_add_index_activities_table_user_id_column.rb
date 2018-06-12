class AddIndexActivitiesTableUserIdColumn < ActiveRecord::Migration[5.2]
  def change
    add_index :activities, :user_id
  end
end
