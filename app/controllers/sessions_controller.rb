class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create 
        @user = User.find_by(username: params[:session][:username].downcase)
        if @user && @user.authenticate(params[:session][:password_digest])
            session[:user_id] = @user.id
            render json: :no_content
        else 
            render json: @user.errors.full_messages
        end
    end

    def destroy
        if session[:user_id] 
           session[:user_id] = nil
           render json: :no_content 
        else 
           render json: session[:user_id].errors.full_messages
        end        
    end

    private 

     def session_params
        params.require(:session).permit(:username, :password_digest)
     end 

end
