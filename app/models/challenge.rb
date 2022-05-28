class Challenge < ApplicationRecord
    belongs_to :drawing
    has_one :user, through: :drawing

    validates :drawing_id, uniqueness: {scope: :user, message: ": You already made a challenge for this drawing!"}

end
