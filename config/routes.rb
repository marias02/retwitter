Rails.application.routes.default_url_options[:host] = "http://localhost:3000"

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'homepage#index'
  post '/login_user', to: 'sessions#create'
  delete '/logout_user', to: 'sessions#destroy'
  post '/signup_user', to: 'users#create'
  get '/users', to: 'users#index'
  get '/users/:username', to: 'users#show'
  get '/tweetes/following_latest_tweetes', to: 'tweetes#following_latest_tweetes'
  get '/tweetes/:id', to: 'tweetes#show'
  get '/*path' => 'homepage#index'
  post '/tweetes/new', to: 'tweetes#create'
  delete '/tweetes/delete/:id', to: 'tweetes#destroy'
  get '/upload', to: 's3uploads#set_s3_direct_post'
  post '/tweetes/:id/like', to: 'users#like'
  post '/tweetes/:id/retweet', to: 'users#retweet'
end
