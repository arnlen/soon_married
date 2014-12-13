class PicturesController < ApplicationController
	before_action :is_authenticated!

  def index
    @pictures = Picture.order(:groups, :hd_file_name)
    if params[:admin]
      render 'pictures/index_admin'
    end
  end

  private
  	def is_authenticated!
  		redirect_to new_session_path unless cookies[:access_granted_to_150814_pictures]
  	end
end
