class ApplicationController < ActionController::API
    include ActionController::Cookies

    # before_action :authenticate_user!
    before_action :configure_permitted_parameters, if: :devise_controller?

    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    
    private
    
    def render_invalid invalid
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
    
    def render_not_found unfound
        render json: {error: "#{controller_name.classify} not found"}, status: 404
    end

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    end
end
