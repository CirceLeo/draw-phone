class FriendshipsController < ApplicationController
    before_action :find_friendship, only: [:show, :update, :destroy]
    def create
        friendship = Friendship.create!(friendship_params)
        render json: friendship, status: :created
    end

    def incomplete_friendships
        non_confirmed = Friendship.where(friend_id: params[:user_id])
        #and need a way to filter out where theres a corospoinding friendship....
        render json: non_confirmed, include: "user"
    end

    def confirm_friendship
        
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
        params.permit(:friend_id, :user_id)
    end
end
