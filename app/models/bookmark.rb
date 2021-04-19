class Bookmark < ApplicationRecord
    belongs_to :bookmarker, class_name: "User"
    belongs_to :bookmarked, class_name: "Tweete"

    validates :bookmarker_id, presence: true
    validates :bookmarked_id, presence: true
end
