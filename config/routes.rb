Rails.application.routes.draw do
  namespace :v1 do
    resources :users
  end
  post '/login' => 'sessions#login'
  delete '/logout' => 'sessions#logout' 
  get '/auth-check' => 'sessions#auth_check' 
  post '/auto-login' => 'sessions#auto_login'
end
