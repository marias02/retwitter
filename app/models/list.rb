class List < ApplicationRecord
    # has_many :followers, through: :active_memberships, source: :follower

    has_many :passive_memberships, class_name: "Membership", 
    foreign_key: "list_id", dependent: :destroy

    has_many :members, through: :passive_memberships, source: :membership_p

    validates :hidden, presence: :true
end
