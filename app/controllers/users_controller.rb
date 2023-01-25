class UsersController < ApplicationController

    before_action :find_user, only: [:update, :destroy, :user_details, :show]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def user_details
        details = {drawings: @user.drawings.order(created_at: :desc), friendships: @user.friendships}
        render json: details, status: :ok
    end

    def show
        render json: @user, include: ["drawings", "friends"], status: :ok
    end

    def current_logged_in
        user = User.find(session[:user_id])
        if user
            render json: user, include: ["drawings", "friends"], methods: :friends, status: :ok
        else
            render json: {}, status: :unauthorized
        end
    end

    def index
        render json: User.all, status: :ok
    end

    def update
        @user.update(user_params)
        render json: @user, status: :accepted
    end

    def destroy
        @user.destroy
        render json: {}, status: 204
    end
    private
    def find_user
        @user = User.find(params[:id])
    end
    def user_params
        params.permit(:username, :password, :email)
    end
end
