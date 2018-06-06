class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string, column_options: {null: false}
    add_column :users, :last_name, :string, column_options: {null: false}
    add_column :users, :birth_date, :date, column_options: {null: false}
  end
end
