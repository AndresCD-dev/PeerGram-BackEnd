class ProfilesController < ApplicationController
    def index
        @profile = Profile.find_by("user_id = :user_id", { user_id: session[:user_id]})
        if @profile
            render json: @profile
        else
            render json: {error: "post not found"}, status: 404
        end
    end

    def update
        @profile = Profile.find_by("user_id = :user_id", { user_id: session[:user_id]})
        if @profile
            @profile.update(profile_params)
            render json: @profile
        else
            render json: {error: "post not found"}, status: 404
        end
    end


    private
    def profile_params
        params.permit(:name, :bio)
    end
end
