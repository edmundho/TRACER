class Api::RoutesController < ApplicationController
  def index
    @routes = Route.all
  end

  def create
    @route = Route.new(:title, :type, :date, :start_time, :end_time, :distance, :elevation, :map_image, :polyline_string)

    if @route.save
      render :index
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def route_params
    params.require(:route).permit(:title, :type, :date, :start_time, :end_time, :distance, :elevation, :map_image, :polyline_string)
  end
end
