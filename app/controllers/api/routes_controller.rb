class Api::RoutesController < ApplicationController
  def index
    @routes = current_user.routes
  end

  def show
    @route = Route.find(params[:id])
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
    params.require(:route).permit(:title, :sport, :distance, :elevation, :polyline_string, :description, :origin, :destination)
  end
end
