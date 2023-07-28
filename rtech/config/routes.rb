  Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :books, only: [:index, :show]
    resources :schools, only: :index
  end

  get '*path', to: "static_pages#frontend_index"

end
