class ChallengesController < ApplicationController
    before_action :find_challenge, only: [:show, :update, :destroy]
    def create
        challenge = Challenge.create!(challenge_params)
        render json: challenge, status: :created
    end
    def show
        render json: @challenge, status: :ok
    end
    def index
        render json: Challenge.all, status: :ok
    end
    def update
        @challenge.update(challenge_params)
        render json: @challenge, status: :accepted
    end
    def destroy
        @challenge.destroy
        render json: {}, status: 204
        # head :no_content, status: 204
    end
    private
    def find_challenge
        @challenge = Challenge.find(params[:id])
    end
    def challenge_params
        params.permit(:drawing_id, :title)
    end
end
