class ChangeTypeColumnName < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :type
    add_column :routes, :sport, :integer, default: 0, null: false
  end
end
