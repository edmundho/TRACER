class Activity < ApplicationRecord
  validates :title, :sport, :date, presence: true

  enum sport: [:bike, :run]

  belongs_to :user
end
