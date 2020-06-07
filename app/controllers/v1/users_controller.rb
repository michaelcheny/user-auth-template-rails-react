class V1::UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      log_in(user)
      render json: user, status: 201
    else
      render json: { errors: user.errors.full_messages }, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_digest)

  end
end
