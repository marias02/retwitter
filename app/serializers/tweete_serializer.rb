class TweeteSerializer < ActiveModel::Serializer
  attributes :id, :media, :text
  belongs_to :user
  has_many :likes
  has_many :retweetes
  
  include Rails.application.routes.url_helpers
end
