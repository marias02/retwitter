class Tweete < ApplicationRecord
    has_one_attached :image
    belongs_to :user
    has_many :comments, dependent: :destroy
    has_many :users, through: :comments
    validates :text, presence: true, length: { maximum: 280 }

    # Uncomment when you make the appropiate tests for them!
    has_many :likers, class_name: "Like", foreign_key: "liked_id", 
    dependent: :destroy

    has_many :likes, through: :likers, source: :liker
    
    has_many :retweets, class_name: "Retweete", foreign_key: "retweeted_id",
    dependent: :destroy

    has_many :retweetes, through: :retweets, source: :retweete

    has_many :bookmarked, class_name: "Bookmark", foreign_key: "bookmarked_id",
    dependent: :destroy

    def comment(user_id, content)
        if User.find(user_id)
            Comment.create(user_id: user_id, tweete_id: self.id, comment: content)
        end
    end

    def remove_comment(comment_id)
        if Comment.find(comment_id)
            Comment.find(comment_id).destroy
        end
    end
end

