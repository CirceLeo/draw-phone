class Challenge < ApplicationRecord
    belongs_to :drawing
    has_one :user, through: :drawing
end
