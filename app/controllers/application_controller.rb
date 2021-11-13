class ApplicationController < ActionController::API
    include ActionController::Cookies
    # before_action :confirm_authentication


  private

  def bio
    @profile = Profile.new(bio: "", name: "", followers: Faker::Number.number(digits: 3), following: Faker::Number.number(digits: 3))
        @profile.user_id = session[:user_id]  
        @profile.save        
  end

  def current_user
    @current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
  end

  def confirm_authentication
    render json: { error: "You must be logged in to do that." }, status: :unauthorized unless current_user
  end

end
