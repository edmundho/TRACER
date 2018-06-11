class RemoveMapImageColumnFromRoutesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :map_image
  end
end
