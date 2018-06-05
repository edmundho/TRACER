class Api::SessionsController < ApplicationController
  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["no current user"], status: 404
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['wrong username/password'], status: 422
    end
  end
end
