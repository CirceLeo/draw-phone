class UsersSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :friends
  has_many :drawings
  has_many :followed
  has_many :followers
end
