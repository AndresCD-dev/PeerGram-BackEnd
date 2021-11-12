class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes, :user
  has_one :post
  has_one :user
end
