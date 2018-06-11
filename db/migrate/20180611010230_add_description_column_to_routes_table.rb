class AddDescriptionColumnToRoutesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :description, :text
  end
end
