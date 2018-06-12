class AddOriginAndDestColumnsToRoutesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :origin, :string, null: false
    add_column :routes, :destination, :string, null: false
  end
end
