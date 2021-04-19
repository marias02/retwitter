class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :tweete

    validates :user_id, presence: true
    validates :tweete_id, presence: true
    validates :comment, presence: true, length: { maximum: 280 }
end
