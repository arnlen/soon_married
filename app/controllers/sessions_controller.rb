class SessionsController < ApplicationController

  def new
  end

  def create
  	if params[:passphrase] === "15 août 2014 en images"
  		cookies[:access_granted_to_150814_pictures] = true
  		redirect_to pictures_path
  	else
  		render "new"
  	end
  end

  def destroy
  end

end
