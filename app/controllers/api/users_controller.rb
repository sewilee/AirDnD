class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = current_user
    # @bookings = @user.bookings
    # @user = User.includes(:bookings).find(current_user.id)
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :birthday, :fname, :lname)
  end
end
