class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable, :authentication_keys => [:username]
  
  validates :email, uniqueness: true
  validates :username, uniqueness: true

  has_many :drawings, -> {order(:created_at => :desc)}

  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships
  # has_many :follower_follows, foreign_key: :followed_id, class_name: "Friendship"
  # has_many :followers, through: :follower_follows, source: :follower

  # has_many :followed_follows, foreign_key: :followed_id, class_name: "Friendship"
  # has_many :followeds, through: :followed_follows, source: :followed


  def create
    user = User.create(user_params)
    if user.valid?
        render json: user, status: :created
    else 
        render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  # def friends
  #   all_friends = self.followeds + self.followers
  #   all_friends
  # end

  private 

  def user_params
      params.permit(:username, :password, :password_confirmation, :email)
  end
end
