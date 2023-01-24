class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.valid_password?(params[:password])
            sign_in(user)
            session[:user_id] = user.id
            render json: user, include: ["drawings", "friends"], methods: :friends, status: :created
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        if session[:user_id]
            session.delete :user_id
            head :no_content
        else
            render json: {errors: ["No user currently logged in"]}, status: 401
        end
    end
end
