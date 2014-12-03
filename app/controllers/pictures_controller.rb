class PicturesController < ApplicationController
	before_action :is_authenticated!

  def index
  end

  def show
  end

  private
  	def is_authenticated!
  		redirect_to new_session_path unless cookies[:access_granted_to_150814_pictures]
  	end
end
