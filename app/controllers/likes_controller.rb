class LikesController < ApplicationController
   def create
      @user = User.find_by(id: session[:user_id])
      @tweete = Tweete.find_by(id: params[:id])
      @like = @user.liked_tweetes.create(liked_id: @tweete.id)

      respond_to do |format|
         if @like.save
            format.html { redirect_to '/home', notice: "yay" }
         end
      end
   end

   def destroy
      @user = User.find_by(id: session[:user_id])
      @tweete = Tweete.find_by(id: params[:id])
      @like = Like.find_by(liked_id: @tweete.id, liker_id: @user.id)

      respond_to do |format|
         if @like.destroy 
            format.html { redirect_to '/home', notice: "Good bye tweete!"}
         end
      end
   end
end
