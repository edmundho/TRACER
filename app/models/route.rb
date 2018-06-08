class Route < ApplicationRecord
  validates :user_id, :title, :type, :date, :start_time, :end_time, :distance, :elevation, :map_image, :polyline_string, presence: true

  belongs_to :user
end
