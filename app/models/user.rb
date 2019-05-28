class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :birthday, :first_name, :last_name presence: true
    validates :password, lenght: {minimum: 8}, allow_nil: true

    before_validation :ensure_session_token

    attr_reader :password

    #def validate_age

    #def validate_email

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
        self.password_digest = Bcrypt::Password.create(password)
    end

    def is_password?(password)
        brcypted = Bcrypt::Password.new(self.password_digest)
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