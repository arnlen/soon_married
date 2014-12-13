Rails.application.routes.draw do
  root "pictures#index"
  get "old_home" => "static_pages#home"

  resources :pictures, only: [:index]
  resources :sessions, only: [:new, :create, :destroy]

  post "register_guest" => "static_pages#register_guest"
end
