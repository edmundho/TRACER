class RemoveDateColumnsFromRoutesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :date
    remove_column :routes, :start_time
    remove_column :routes, :end_time
  end
end
