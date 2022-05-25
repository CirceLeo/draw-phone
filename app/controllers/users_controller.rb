class UsersController < ApplicationController
    skip_before_action :authenticate_user!, only: :create
    before_action :find_user, only: [:update, :destroy, :user_drawings, :show]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def user_drawings
        render json: @user.drawings.order(created_at: :desc), include: "user", status: :ok
    end

    def show
        render json: @user, include: "drawings", status: :ok
    end

    def current_logged_in
        user = User.find(session[:user_id])
        if user
            render json: user, include: ["drawings", "followers", "followed"], status: :ok
            # render json: user, status: :ok
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
        # head :no_content, status: 204
    end
    private
    def find_user
        @user = User.find(params[:id])
    end
    def user_params
        params.permit(:username, :password, :email)
    end
end
