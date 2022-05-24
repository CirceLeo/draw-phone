class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable, :authentication_keys => [:username]
  
  validates :email, uniqueness: true
  validates :username, uniqueness: true

  has_many :drawings

  has_many :followers, foreign_key: :follower_id, class_name: "Friendship"
  has_many :followed, through: :followers

  has_many :followed, foreign_key: :followed_id, class_name: "Friendship"
  has_many :followers, through: :followed


  def create
    user = User.create(user_params)
    if user.valid?
        render json: user, status: :created
    else 
        render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private 

  def user_params
      params.permit(:username, :password, :password_confirmation, :email)
  end
end
