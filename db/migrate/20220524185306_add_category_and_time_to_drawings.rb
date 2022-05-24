class AddCategoryAndTimeToDrawings < ActiveRecord::Migration[7.0]
  def change
    add_column :drawings, :subject_category, :string
    add_column :drawings, :play_time, :integer
  end
end
