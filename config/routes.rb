Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'homepage#index'
  post '/login_user', to: 'sessions#create'
  delete '/logout_user', to: 'sessions#destroy'
  post '/signup_user', to: 'users#create'
  get '/users', to: 'users#index'
  get '/tweetes/following_latest_tweetes', to: 'tweetes#following_latest_tweetes'
  get '/tweetes/:id', to: 'tweetes#show'
  get '/*path' => 'homepage#index'
  post '/tweetes/new', to: 'tweetes#create'
  delete '/tweetes/delete/:id', to: 'tweetes#destroy'
end
