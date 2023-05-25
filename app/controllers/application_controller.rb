class ApplicationController < ActionController::Base
    # helper_method :logged_in?, :current_user

    def login(user)
        session[:user_id] = user.id
    end

    def logged_in?
        !!current_user
    end

    # def logout
    #     if logged_in?
    #         session[:user_id] = nil
    #     end
    # end

    private
    def current_user
        @_current_user ||= session[:user_id] && User.find_by(id: session[:user_id])
    end
end
