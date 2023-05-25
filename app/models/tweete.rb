class Tweete < ApplicationRecord
    has_one_attached :media
    belongs_to :user
    
    validates :text, presence: true, length: { maximum: 280 }

    has_many :comments, class_name: "Comment", foreign_key: "tweete_id",
    dependent: :destroy

    has_many :commenters, through: :comments, source: :tweete

    # Uncomment when you make the appropiate tests for them!
    has_many :likers, class_name: "Like", foreign_key: "liked_id", 
    dependent: :destroy

    has_many :likes, through: :likers, source: :liker
    
    has_many :retweets, class_name: "Retweete", foreign_key: "retweeted_id",
    dependent: :destroy

    has_many :retweetes, through: :retweets, source: :retweete

    has_many :bookmarked, class_name: "Bookmark", foreign_key: "bookmarked_id",
    dependent: :destroy

    def media_url
        if self.media.attached? != false
            Rails.application.routes.url_helpers.url_for(self.media)
            return self.media.service_url
        end
    end

    def as_json(options = {})
        super(options).merge({
            "likes" => self.likes,
            "retweets" => self.retweetes,
            "comments" => self.comments
        })
    end
end

