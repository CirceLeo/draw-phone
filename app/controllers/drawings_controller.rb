class DrawingsController < ApplicationController
    before_action :find_drawing, only: [:show, :update, :destroy]
    skip_before_action :authenticate_user!
    def create
        drawing = Drawing.create!(drawing_params)
        render json: drawing, status: :created
    end
    def show
        render json: @drawing, status: :ok
    end
    def index
        render json: Drawing.all.order(created_at: :desc), status: :ok
    end
    def update
        @drawing.update(drawing_params)
        render json: @drawing, status: :accepted
    end
    def destroy
        @drawing.destroy
        render json: {}, status: 204
        # head :no_content, status: 204
    end
    private
    def find_drawing
        @drawing = Drawing.find(params[:id])
    end
    def drawing_params
        params.permit(:data_url, :origin_pic_url)
    end
end
