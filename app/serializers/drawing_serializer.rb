class DrawingSerializer < ActiveModel::Serializer
  attributes :id, :data_url, :origin_pic_url
  belongs_to :user
end
