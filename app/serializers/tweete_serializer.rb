class TweeteSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :text, :media

  def media
    if object.media.attached?
      {
        url: rails_blob_url(object.media)
      }
    end
  end
end
