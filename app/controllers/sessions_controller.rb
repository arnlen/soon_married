class SessionsController < ApplicationController

  def new
  end

  def create
  	if params[:passphrase] === "15 août 2014 en images" || params[:passphrase] === "What a beautiful day"
  		cookies[:access_granted_to_150814_pictures] = true
  		redirect_to pictures_path
  	else
      flash[:notice] = "Et tu espères accéder aux photos avec cette phrase ?<br>C'est mort."
  		render "new"
  	end
  end

  def destroy
  end

end
