Rails.application.routes.draw do
  get 'emails/index'
  devise_for :users
  root to: "home#index"

  resources :tasks, except: [:show]
  resources :emails, only: [:index,:destroy,:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
