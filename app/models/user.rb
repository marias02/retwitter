class User < ApplicationRecord
    require 'date'
    has_secure_password
    validates :password_digest, presence: true
    validates :username, uniqueness: true
    before_create :provide_username_if_abscent
    validates :name, presence: true, length: { maximum: 50 }
    validates :birthdate, presence: true, exclusion: { in: [""] }
    validate :birthdate_valid?
    validates :email, presence: true, if: :phone_presence, exclusion: { in: [""] }, format: { with: /\D\S[a-z+]@[a-z].[a-z]/}
    validate :email_valid?
    validates :phone, presence: true, if: :email_presence, exclusion: { in: [""] }, 
    format: { without: /\s+/, message: "can't have spaces" }
    has_one_attached :profile_picture
    has_many :tweetes, dependent: :destroy
    has_many :comments, through: :tweetes
    
    has_many :liked_tweetes, class_name: "Like", foreign_key: "liker_id",
    dependent: :destroy

    has_many :active_friendships, class_name: "Friendship", 
    foreign_key: "follower_id", dependent: :destroy

    has_many :passive_friendships, class_name: "Friendship", 
    foreign_key: "followed_id", dependent: :destroy

    has_many :followers, through: :passive_friendships, source: :follower

    has_many :following, through: :active_friendships, source: :followed

    has_many :active_friendships_requests, class_name: "FriendshipRequest",
    foreign_key: "requester_id", dependent: :destroy

    has_many :passive_friendships_requests, class_name: "FriendshipRequest", 
    foreign_key: "requested_id", dependent: :destroy

    has_many :follower_requests, through: :passive_friendships_requests, 
    source: :requester
    has_many :following_requests, through: :active_friendships_requests, 
    source: :requested

    has_many :liked, through: :liked_tweetes, source: :liked

    has_many :tweetes_retweeted, class_name: "Retweete",
    foreign_key: "retweeted_id", dependent: :destroy

    has_many :retweetes, through: :tweetes_retweeted, source: :retweeted

    has_many :tweetes_bookmarked, class_name: "Bookmark",
    foreign_key: "bookmarker_id", dependent: :destroy

    has_many :bookmarked, through: :tweetes_bookmarked, source: :bookmarked

    # Here you're gonna put the active memberships and the passive memberships
    # the active memberships are the followers of the list, and the passive
    # memberships are the members of the list who are elected by the owner of 
    # the list and rebember the list_id to know which memberships that belongs
    # to

    def email_valid?
        split_email = self.email.split("@") if self.email != nil
        split_again = self.email.split(".") if self.email != nil

        if self.email != nil
            if self.email.include?("@")
                if split_email[0].length === 0
                    errors.add(:email, "Your email must have an username")
                end
            else
              errors.add(:email, "Your email must have an '@'")
            end
            if !self.email.include?(".")
                errors.add(:email, "Your email must have a '.'")
            end 

            if split_again.length === 2
                if split_again[0].length === 0
                    errors.add(:email, "Your email must have an email name...")
                end
                if split_again[1].length === 0
                    errors.add(:email, "Your email must have a domain name")
                end
            else
                errors.add(:email, "Your email must have an email name")
                errors.add(:email, "Your email must have a domain name")
            end

        end

        if self.errors[:email].length >= 1
            return false
        else 
            return true
        end
    end

    def birthdate_valid?
        if self.birthdate != nil 
            if Date.parse(self.birthdate.to_s) != nil
                if Date.parse(self.birthdate.to_s) >= Date.parse(1.day.from_now.to_s)
                    errors.add(:birthdate, "Your birthdate cannot be after today") 
                end
            end
        else 
            return "can't be blank"
        end
    end

    def follow(user)
        @user = User.find(user.id)

        if @user && !following.include?(user)
            if @user.private && !FriendshipRequest.find_by(requested_id: user.id)
              active_friendships_requests.create(requested_id: user.id)
            else
              active_friendships.create(followed_id: user.id)
            end
        end
    end

    def approve_follower_request(user) 
        if FriendshipRequest.find_by(requested_id: user.id) && !following.include?(user)
            active_friendships.create(followed_id: user.id)
            FriendshipRequest.find_by(requested_id: user.id).destroy
        end
    end

    def disapprove_follower_request(user)
        FriendshipRequest.find_by(requested_id: user.id).destroy
    end

    def follower_request?(user)
        follower_requests.include?(user)
    end

    def unfollow(user)
        active_friendships.find_by(followed_id: user.id).destroy
    end

    def following?(user)
        following.include?(user)
    end

    def provide_username_if_abscent
        self.username ||= self.name + 
        rand((User.all.length)..(User.all.length * 192838475)).to_s
    end

    def phone_presence
        self.phone === nil || self.phone === ""
    end

    def email_presence
        self.email === nil || self.email === ""
    end

    def liked?(tweete)
        liked_tweetes.find_by(liked_id: tweete.id)
    end

    def retweeted?(tweete)
        tweetes_retweeted.find_by(retweete_id: tweete.id)
    end

    def bookmarked?(tweete)
        tweetes_bookmarked.find_by(bookmarked_id: tweete.id)
    end
end

