class Api::RoutesController < ApplicationController
  def index
    @routes = current_user.routes
  end

  def create
    @route = Route.new(route_params)
    @route.user_id = current_user.id

    if @route.save
  
      render json: @route
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def route_params
    params.require(:route).permit(:title, :sport, :date, :start_time, :end_time, :distance, :elevation, :map_image, :polyline_string)
  end
end
