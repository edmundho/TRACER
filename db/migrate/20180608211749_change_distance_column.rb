class ChangeDistanceColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :routes, :distance, :integer
  end
end
