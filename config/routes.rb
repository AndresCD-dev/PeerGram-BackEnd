Rails.application.routes.draw do
  resources :profiles
  resources :comments
  resources :posts
  resources :users, only: [:show, :create, :update]
  

  patch "/profiles", to: "profiles#update"
  patch "/users", to: "users#update"
  get "/userposts", to: "posts#user_posts"
  post "/login", to: "sessions#create"
  get "/user", to: "sessions#show"
  get "/logout", to: "sessions#logout"
  get "/allusers", to: "users#index"

  post "/signup", to: "users#create"
end
