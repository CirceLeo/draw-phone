class Challenge < ApplicationRecord
    belongs_to :drawing
    has_many :attempts

    validates :drawing_id, uniqueness: true

end
