class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :birthday, :fname, :lname, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: "only allows valid emails" }
    validate :validate_age

    after_initialize :ensure_session_token

    attr_reader :password

    has_many :listings,
    primary_key: :id, 
    foreign_key: :host_id,
    class_name: :Listing

    def validate_age
        if self.birthday && (self.birthday + 18.year) < Date.current
            return true
        else
            errors.add(:birthday, "You need to be over 18 to Sign Up!")
        end
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return nil unless user && user.is_password?(password)
        user
    end

    def reset_token!
        self.update(session_token: User.generate_session_token)
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        brcypted = BCrypt::Password.new(self.password_digest)
        brcypted.is_password?(password)
    end

    private

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end
end