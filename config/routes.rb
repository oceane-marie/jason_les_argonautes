Rails.application.routes.draw do
  root to: 'argonautes#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :argonautes
end
