class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes
  has_one :post
  has_one :user
end
