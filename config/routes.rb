Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'homepage#index'
  get '/tweetes/index', to: 'tweetes#index'
  get '/login', to: 'sessions#new'
  post '/login_user', to: 'sessions#create'
  get '/signup', to: 'users#new'
  post '/signup_user', to: 'users#create'
  get '/users', to: 'users#index'
  get '/*path' => 'homepage#index'
end
