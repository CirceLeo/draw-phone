class ApplicationController < ActionController::Base
    include ActionController::Cookies

    # before_action :authenticate_user!

    
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        logger.debug "howdy"
        respond_to do |format|
            format.html { render body: Rails.root.join('public/index.html').read }
        end
    end

    def fallback_index_html
        render file: 'public/index.html'
    end
    
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
