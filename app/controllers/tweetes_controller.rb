class TweetesController < ApplicationController
    def following_latest_tweetes
        @current_user = User.find(session[:user_id])
        tweetes_following_user_id = []

        ordered_tweetes = Tweete.all.order(created_at: :desc)

        ordered_tweetes.each do |i|
            @current_user.following.each do |following|
                if following.id == i.user_id 
                    tweetes_following_user_id.push(i)
                end
            end
        end

        render json: tweetes_following_user_id
    end

    def new
        @tweete = Tweete.new
    end

    def create
        @user = User.find(session[:user_id])
        @tweete = @user.tweetes.new(tweete_params)
        @tweete.image.attach(tweete_params[:image])

        respond_to do |format|
            if @tweete.save
                format.html { redirect_to user_tweetes_path, notice: 'Your Tweete was succesfully published'}
            else 
                format.html { redirect_to user_tweetes_path, notice: "We had a problem, publishing your tweete, wait a moment and try again..."}
            end 
        end
    end

    def destroy
        if session[:user_id]
            @user = User.find(session[:user_id])
            @user.tweetes.last.destroy
        end

        respond_to do |format|
            format.html { redirect_to users_url, notice: "tweete was successfully destroyed"}
            format.json { head :no_content }
        end
    end

    private 

        def tweete_params
            params.require(:tweete).permit(:tweete, :author, :image)
        end
end
