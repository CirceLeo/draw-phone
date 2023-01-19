Rails.application.routes.draw do
  
  # get '*path' => 'main#index'
  
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end


  resources :challenges
  get '/challenges/trending', to: 'challenges#trending'
  resources :attempts
  # post '/attempts', to: 
  resources :friendships
  resources :drawings
  get '/drawings/subj/:subject_matter', to: 'drawings#by_subject'
  get '/user_details/:id', to: 'users#user_details'
  
  post '/signup', to: 'users#create'
  get '/me', to: 'users#current_logged_in'
  get '/auth', to: 'users#show'
  
  resources :users
  # devise_for :users,     controllers: {       sessions: 'sessions'     }
  devise_scope :user do
    # scope :auth, defaults: { format: :json } do
      post   '/login',       to: 'sessions#create'
      delete '/logout',      to: 'sessions#destroy'
      # post   '/signup',       to: 'registrations#create'
      # put    '/account',      to: 'registrations#update'
      # delete '/account',      to: 'registrations#destroy'
      # put    '/password',     to: 'devise/passwords#update'
      # post   '/password',     to: 'devise/passwords#create'
      # get    '/confirmation', to: 'devise/confirmations#show'
      # post   '/unlock',       to: 'devise/unlocks#create'
      # get    '/unlock',       to: 'devise/unlocks#show'
    # end
  end
  # devise_for :users

  # devise_scope :user do
  #   get 'login', to: 'devise/sessions#new'
  # end

  # devise_scope :user do
  #   delete 'logout', to: 'devise/sessions#destroy'
  # end

  # devise_for :users, skip: [:sessions]
  # as :user do
  #   get 'signin', to: 'devise/sessions#new', as: :new_user_session
  #   post 'signin', to: 'devise/sessions#create', as: :user_session
  #   delete 'signout', to: 'devise/sessions#destroy', as: :destroy_user_session
  # end

  # devise_for :users, skip: :all


  # post '/login', to: 'sessions#create'
  # delete '/logout', to: 'sessions#destroy'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: 'home#index'
end
