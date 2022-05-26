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
        render json: Drawing.all.limit(15).order(created_at: :desc), status: :ok
    end

    def by_subject
        render json: Drawing.where(subject_category: params[:subject_matter]).order(created_at: :asc)
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
        params.permit(:data_url, :origin_pic_url, :user_id, :title, :subject_category, :play_time)
    end
end
