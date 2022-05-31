class Challenge < ApplicationRecord
    belongs_to :drawing
    has_many :attempts
    # has_one :user, through: :drawing

    validates :drawing_id, uniqueness: true

end
