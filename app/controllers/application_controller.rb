class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[session_token])
    end

    def login(user)
        session[session_token] = user.reset_token!
        @current_user = user
    end

    def logout
        
    end

    def logged_in?
    end

end
