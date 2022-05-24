class AddKeysToFriendships < ActiveRecord::Migration[7.0]
  def change
    add_column :friendships, :follower_id, :integer
    add_column :friendships, :followed_id, :integer
  end
end
