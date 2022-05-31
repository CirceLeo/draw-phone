class AttemptsController < ApplicationController
    before_action :find_attempt, only: [:show, :update, :destroy]
    def create
        attempt = Attempt.create!(attempt_params)
        render json: attempt, status: :created
    end
    def show
        render json: @attempt, status: :ok
    end
    def index
        render json: Attempt.all, status: :ok
    end
    def update
        @attempt.update(attempt_params)
        render json: @attempt, status: :accepted
    end
    def destroy
        @attempt.destroy
        render json: {}, status: 204
        # head :no_content, status: 204
    end
    private
    def find_attempt
        @attempt = Attempt.find(params[:id])
    end
    def attempt_params
        params.permit(:user_id, :challenge_id, :title, attempt_url)
    end
end
