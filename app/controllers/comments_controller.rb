class CommentsController < ApplicationController
    def new
        if params[:id]
            @tweete_id = params[:id]
        end
    end

    def show
        if comments_params[:comment_id] && comments_params[:tweete_id]
            @comment = Comment.find(comments_params[:comment_id])    
            @tweete = Tweete.find(comments_params[:tweete_id])       
        end
    end

    def create
        @current_user = User.find(session[:user_id])
        @tweete = Tweete.find(comments_params[:tweete_id])
        if @tweete && @current_user
            @current_user.comment(@tweete.id, comments_params[:comment])
            redirect_to '/tweetes' 
        end
    end 

    def destroy
        @current_user = User.find(session[:user_id])
        @tweete = Tweete.find(comments_params[:id])
        if @tweete && @current_user
            @current_user.comment_out(comments_params[:comment_id])
            redirect_to '/tweetes'
        end
    end

    private
    def comments_params
        params.require(:comment).permit(:tweete_id, :comment, :comment_id)
    end
end
