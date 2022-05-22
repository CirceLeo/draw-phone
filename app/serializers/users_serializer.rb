class UsersSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :drawings
end
