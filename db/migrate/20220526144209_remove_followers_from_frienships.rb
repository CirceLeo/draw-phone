class RemoveFollowersFromFrienships < ActiveRecord::Migration[7.0]
  def change
    remove_column :friendships, :follower_id
    remove_column :friendships, :followed_id

    add_column :friendships, :user_id, :integer 
    add_column :friendships, :friend_id, :integer
  end
end
