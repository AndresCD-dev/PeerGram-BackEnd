class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :followers, :following
  has_one :user
end
