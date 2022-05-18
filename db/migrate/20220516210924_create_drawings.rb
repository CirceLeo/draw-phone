class CreateDrawings < ActiveRecord::Migration[7.0]
  def change
    create_table :drawings do |t|
      # t.integer :user_id
      t.string :data_url
      t.string :origin_pic_url
      t.timestamps
    end
  end
end
