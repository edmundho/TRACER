class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.integer :type, null: false, default: 0
      t.date :date, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.float :distance, null: false
      t.float :elevation, null: false
      t.string :map_image, null: false, default: "url"
      t.text :polyline_string, null: false

      t.timestamps
    end
    add_index :routes, :user_id
  end
end
