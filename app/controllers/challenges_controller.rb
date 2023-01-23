class ChallengesController < ApplicationController
    before_action :find_challenge, only: [:show, :update, :destroy]
    def create
        challenge = Challenge.create!(challenge_params)
        render json: challenge, status: :created
    end
    def show
        render json: @challenge, include: ["drawing", "attempts"], status: :ok
    end
    def trending
        render json: Challenge.all.limit(8), include: "drawing", status: :ok
    end

    def index
        render json: Challenge.all.order(created_at: :desc), include: ["drawing", "drawing.user", "attempts"], status: :ok
    end

    def update
        @challenge.update(challenge_params)
        render json: @challenge, status: :accepted
    end
    def destroy
        @challenge.destroy
        render json: {}, status: 204
    end
    private
    def find_challenge
        @challenge = Challenge.find(params[:id])
    end
    def challenge_params
        params.permit(:drawing_id, :challenge_title)
    end
end
