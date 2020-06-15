class SessionsController < ApplicationController
  def login
    user = User.find_by(username: params[:user][:username])
    # byebug
    if user && user.authenticate(params[:user][:password])
      log_in(user)
      render json: user, only: [:id, :username], status: 200
    else
      render json: { error: 'Invalid log in credentials' }, status: 401
    end
  end

  def auth_check
    render json: { csrf_auth_token: form_authenticity_token }
  end

  def logout
    session.clear
    render json: { message: "Logged out" }, status: 200
  end

  def auto_login
    if logged_in?
      user = current_user
      render json: user, only: [:id, :username], status: 200
    else
      render json: { error: 'Not logged in' }
    end
  end
end
