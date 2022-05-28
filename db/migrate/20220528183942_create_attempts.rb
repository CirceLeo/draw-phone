class CreateAttempts < ActiveRecord::Migration[7.0]
  def change
    create_table :attempts do |t|
      t.integer :user_id
      t.integer :challenge_id
      t.string :title
      t.string :attempt_data_url

      t.timestamps
    end
  end
end
