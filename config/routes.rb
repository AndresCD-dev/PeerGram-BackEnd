Rails.application.routes.draw do
  resources :profiles
  resources :comments
  resources :posts
  resources :users, only: [:show, :create]
  
  post "/login", to: "sessions#create"
  get "/user", to: "sessions#show"
  get "/logout", to: "sessions#logout"

  post "/signup", to: "users#create"
end
