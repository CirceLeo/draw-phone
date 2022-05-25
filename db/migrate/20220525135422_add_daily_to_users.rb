class AddDailyToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :did_daily, :boolean
  end
end
