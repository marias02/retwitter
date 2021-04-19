class RetweetesController < ApplicationController
    def create
        if session[:user_id]
            @user = User.find(session[:user_id])
            @retweete = Retweete.create(retweete_id: params[:id], retweeted_id: @user.id) 
        end
        
        respond_to do |format|
            if @retweete.save
                format.html { redirect_to '/home', notice: 'You have retweeted successfully'}
            else 
                format.html { redirect_to '/home', notice: 'We had a problem, please, try again...'}
            end
        end
    end

    def destroy
        if session[:user_id]
            @user = User.find(session[:user_id])
            @retweete = Retweete.find_by(retweete_id: params[:id], retweeted_id: @user.id)
        end
        
        respond_to do |format|
            if @retweete.destroy
                format.html { redirect_to '/home', notice: 'Retweete deleted'}
            else 
                format.html { redirect_to '/home', notice: 'Error while deleting'}
            end
        end
    end
end
