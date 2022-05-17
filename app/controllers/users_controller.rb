class UsersController < ApplicationController
    skip_before_action :authenticate_user!, only: :create
    before_action :find_user, only: [:show, :update, :destroy]
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end
    def show
        render json: @user, status: :ok
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
        params.permit(:)
    end
end
