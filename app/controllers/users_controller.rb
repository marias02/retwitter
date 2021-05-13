class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token 

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
    if params[:username] != nil
      @looked_user = User.find_by(username: params[:username])
    elsif params[:id] != nil
      @looked_user = User.find(params[:id])
    end
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)
    @user.profile_picture.attach(user_params[:profile_picture])
    if @user.username == ""
      while User.find_by(username: @user.username) && @user.username == ""
        @user.username = @user.name + rand((User.all.length)..(User.all.length * 100000000)).to_s
      end
    end
    if @user.birthdate.is_a? String
      @user.birthdate = Date.parse(@user.birthdate)
      if !Date.valid_date?(@user.birthdate.month, @user.birthdate.day, @user.birthdate.year) 
        flash[:error] = "Not a valid date" 
      end
    else
      if !Date.valid_date?(@user.birthdate.month, @user.birthdate.day, @user.birthdate.year)
        flash[:error] = "Not a valid date"
      end
    end
    

    if !@user.password_digest.instance_of?(BCrypt::Password)
        @user.password_digest = BCrypt::Password.create(@user.password_digest)
    end

    if @user.save
        session[:user_id] = @user.id
        user = @user
    else
        user = @user
        flash[:error] = user.errors.full_messages
    end
  end

  def cover_attachment_path
    profile_picture.attached ? profile_picture : 'user_avatar.jpeg'
  end

  def followers
    if params[:user_id]
      @user = User.find_by(id: params[:user_id])
      @followers = @user.followers
    end
  end

  def following
    if params[:user_id]
      @user = User.find_by(id: params[:user_id])
      @following = @user.following 
    end
  end

  def likes
    if params[:user_id]
      @user = User.find_by(id: params[:user_id])
      @likes = @user.liked
    end
  end

  def bookmarks
    if params[:user_id]
      @user = User.find_by(id: params[:user_id])
      @bookmarks = @user.bookmarked
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    if session[:user_id]
      @user = User.find(session[:user_id])
    end
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    if session[:user_id]
      @user = User.find(session[:user_id])
      @user.destroy
    end
   
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :phone, :email, :birthdate, :password_digest, :profile_picture, :username, :private)
    end
end

