class Message < ApplicationRecord
    belongs_to :receiver, class_name: "User"
    belongs_to :transmitter, class_name: "User"

    validates :receiver_id, presence: true
    validates :transmitter_id, presence: true
    validates :message, presence: true
end
