class Api::ActivitiesController < ApplicationController
  def index
    @activities = current_user.activities
  end

  def create
    @activity = Activity.create(activity_params)
    @activity.user_id = current_user.id

    if @activity.save
      render json: @activity
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  def show
    @activity = Activity.find(params[:id])
  end

  def edit
    @activity = Activity.find(params[:id])
  end

  def update
    @activity = current_user.activities.find(params[:id])

    if @activity.update(activity_params)
      render json: @activity
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end
  
  def delete
    @activity = Activity.find(params[:id])
    @activity.destroy
  end

  def activity_params
    params.require(:activity).permit(:title, :sport, :date, :time, :duration, :distance, :elevation, :description, :route_id)
  end
end
