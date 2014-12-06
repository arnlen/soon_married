class PicturesController < ApplicationController
	before_action :is_authenticated!

  def index
  	@preparation_images = Array 1..13
  	@cityhall_images = Array 14..24
  	@church_images = Array 25..68
  	@shooting_images = Array 69..86
  	@night_images = Array 87..155
  end

  def show
  end

  private
  	def is_authenticated!
  		redirect_to new_session_path unless cookies[:access_granted_to_150814_pictures]
  	end
end
