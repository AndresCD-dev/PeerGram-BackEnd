class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :avatar
  has_many :posts
end
