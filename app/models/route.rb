class Route < ApplicationRecord
  validates :user_id, :title, :sport, :distance, :elevation, :polyline_string, presence: true

  belongs_to :user

  enum sport: [:bike, :run] 

end
