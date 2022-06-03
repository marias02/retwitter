class ApplicationController < ActionController::Base
    helper_method :logged_in?, :current_user

    def current_user
        return nil unless session[:user_id]

        @current_user ||= User.find_by(session: session[:user_id])
    end

    def login(user)
        session[:user_id] = user.id
    end

    def logged_in?
        !!current_user
    end

    def logout
        if logged_in?
            session[:user_id] = nil
        end
    end
end
