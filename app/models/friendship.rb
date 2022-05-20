class Friendship < ApplicationRecord
    belongs_to :user
    belongs_to :user, forign_key: :user_id, class_name
end
