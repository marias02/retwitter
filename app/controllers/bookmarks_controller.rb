class BookmarksController < ApplicationController
    def create
        @user = User.find_by(id: session[:user_id])
        @tweete = Tweete.find_by(id: params[:id])
        @bookmark = @user.tweetes_bookmarked.create(bookmarked_id: @tweete.id)

        if @bookmark.save
            redirect_to '/home', notice: "Tweete added to your bookmarks"
        else
            redirect_to '/home', notice: "Something has happened"
        end
    end

    def destroy
        @user = User.find_by(id: session[:user_id])
        @tweete = Tweete.find_by(id: params[:id])
        @bookmark = Bookmark.find_by(bookmarked_id: @tweete.id, bookmarker_id: @user.id)

        if @bookmark.destroy
            redirect_to '/home'
        end
    end
end
