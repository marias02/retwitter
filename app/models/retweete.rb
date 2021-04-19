class Retweete < ApplicationRecord
    belongs_to :retweeted, class_name: "User"
    belongs_to :retweete, class_name: "Tweete"

    validates :retweeted_id, presence: true
    validates :retweete_id, presence: true
end
