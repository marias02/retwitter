class TweetesController < ApplicationController
    skip_before_action :verify_authenticity_token 

    def following_latest_tweetes
        @current_user = User.find(session[:user_id])

        user_ids = []

        @current_user.following.each do |following|
            user_ids.push(following.id)
        end

        user_ids.push(@current_user.id)

        ordered_tweetes = Tweete.where(user_id: user_ids).order(created_at: :desc).with_attached_media

        render json: ordered_tweetes.as_json(methods: :media_url)
    end

    def new
        @tweete = Tweete.new
    end

    def show
        if !params[:id].nil?
            @looked_tweete = Tweete.find_by(id: params[:id])
            render json: @looked_tweete
        end
    end

    def create
        @user = User.find(session[:user_id])
        @tweete = @user.tweetes.new(tweete_params)
        if @tweete.save
            render json: { tweet: @tweete.as_json(methods: :media_url), errors: nil }
        else
            render json: { tweet: nil, errors: tweete.errors.full_messages} 
        end
    end

    def destroy
        @tweete = Tweete.find_by(id: params[:id])
        if @tweete
            @tweete.destroy
            render json: "SUCCESS"
        end
    end

    private 

        def tweete_params
            params.permit(:text, :id, :media)
        end
end
