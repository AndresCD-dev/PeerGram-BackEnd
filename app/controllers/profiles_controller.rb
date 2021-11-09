class ProfilesController < ApplicationController
    def show
        @profile = Profile.find_by(id: params[:id])
        if @profile
            render json: @profile
        else
            render json: {error: "post not found"}, status: 404
        end
    end
end
