class PostSerializer < ActiveModel::Serializer
  attributes :id, :caption, :image, :likes, :created_at
  has_one :user
  has_many :comments
end
