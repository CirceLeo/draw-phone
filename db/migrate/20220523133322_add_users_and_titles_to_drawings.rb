class AddUsersAndTitlesToDrawings < ActiveRecord::Migration[7.0]
  def change
    add_column :drawings, :title, :string
    add_column :drawings, :user_id, :integer
  end
end
