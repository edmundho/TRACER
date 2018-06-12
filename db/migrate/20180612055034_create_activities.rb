class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.integer :sport, null: false, default: 0
      t.datetime :date, null: false
      t.integer :duration
      t.float :distance
      t.float :elevation
      t.integer :route_id

      t.timestamps
    end
    add_index :activities, :route_id
    add_index :activities, :date
  end
end
