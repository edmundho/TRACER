class Route < ApplicationRecord
  validates :user_id, :title, :sport, :distance, :elevation, :origin, :destination, :polyline_string, presence: true

  belongs_to :user

  enum sport: [:bike, :run]
end
