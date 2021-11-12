class SessionsController < ApplicationController
    # skip_before_action :confirm_authentication, only: [:create]
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def logout
      user = User.find_by(id: session[:user_id])
      if user
        session[:user_id] = nil
        render json: {message: "Logged out successfully"}, status: :ok
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end

    def show
      if current_user
        render json: current_user, status: :ok
      else
        render json: { error: 'No active session' }, status: :unauthorized
      end
    end

end