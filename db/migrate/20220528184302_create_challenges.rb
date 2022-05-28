class CreateChallenges < ActiveRecord::Migration[7.0]
  def change
    create_table :challenges do |t|
      t.integer :drawing_id
      t.string :challenge_title

      t.timestamps
    end
  end
end
