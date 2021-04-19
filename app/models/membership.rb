class Membership < ApplicationRecord
    belongs_to :membership_p, class_name: "List"

    has_many :non_elective_memberships, class_name: "User", foreign_key: 

    validates :list_id, presence: true
    validates :member_id, presence: true
end