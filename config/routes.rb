Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api do
    resources :bench, only: [:index, :create]
  end

end
