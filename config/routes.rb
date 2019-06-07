Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create]
    resource :session, only: [:create, :destroy, :show]
    resources :listings, only: [:create, :show, :index] do
      resources :bookings, only: [:create]
    end

    resources :bookings, only: [:destroy, :update, :index]
  end

end
