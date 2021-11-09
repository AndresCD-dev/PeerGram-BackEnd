class PostSerializer < ActiveModel::Serializer
  attributes :id, :caption, :image, :likes
  has_one :user
  has_many :comments
end
