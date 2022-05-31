class DrawingSerializer < ActiveModel::Serializer
  attributes :id, :data_url, :origin_pic_url, :title, :subject_category, :play_time
  belongs_to :user
  has_many :challenges
end
