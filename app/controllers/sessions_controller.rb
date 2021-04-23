class SessionsController < ApplicationController

    def create 
        @user = User.find_by(email: params[:session][:email].downcase)
        if @user && @user.authenticate(params[:session][:password])
            session[:user_id] = @user.id
        else 
            flash[:login_errors] = 'invalid credentials'
            redirect_to '/'
        end
    end

    def destroy
        session[:user_id] = nil
        redirect_to '/'
    end
end
