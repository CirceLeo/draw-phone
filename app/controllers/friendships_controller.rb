class FriendshipsController < ApplicationController
    before_action :find_friendship, only: [:show, :update, :destroy]
    def create
        friendship = Friendship.create!(friendship_params)
        render json: friendship, status: :created
    end
    def show
        render json: @friendship, status: :ok
    end
    def index
        render json: Friendship.all, status: :ok
    end
    def update
        @friendship.update(friendship_params)
        render json: @friendship, status: :accepted
    end
    def destroy
        @friendship.destroy
        render json: {}, status: 204
        # head :no_content, status: 204
    end
    private
    def find_friendship
        @friendship = Friendship.find(params[:id])
    end
    def friendship_params
        params.permit(:follower_id, :followed_id)
    end
end
