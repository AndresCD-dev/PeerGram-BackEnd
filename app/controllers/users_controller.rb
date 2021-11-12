class UsersController < ApplicationController
    # before_action :authorize, only: [:show]
    # def show
    #     @user = User.find(params[:id])
    #     if @user
    #         render json: @user
    #     else
    #         render json: {error: "User not found"}, status: 404
    #     end
    # end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: 400
        end
    end

    def update
        @user = User.find_by("id = :id", { id: session[:user_id]})
        if @user
            @user.update(update_params)
            render json: @user
        else
            render json: {error: "post not found"}, status: 404
        end
    end
    
    private

    def user_params
    params.permit(:username, :password, :password_confirmation)
    end

    def update_params
        params.permit(:username, :avatar)
    end
end
