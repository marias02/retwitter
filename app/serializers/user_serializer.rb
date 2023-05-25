class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :biography, :profile
  has_many :tweetes
end
