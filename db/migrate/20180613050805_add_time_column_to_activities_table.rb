class AddTimeColumnToActivitiesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :time, :time
  end
end
