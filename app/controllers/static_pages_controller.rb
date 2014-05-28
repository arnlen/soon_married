class StaticPagesController < ApplicationController

    def home
        @guest = Guest.new()
    end

    def register_guest
        @guest = Guest.new(guest_params)

        if @guest.save
            result = 'success'
        else
            result = 'error'
        end

        respond_to do |format|
            format.json {
                render json: {result: result, email: @guest.email},
                status: result != 'success' ? 400 : 200
            }
        end
    end

    private

    def guest_params
        params[:guest].permit(:name, :email, :will_be_present, :asks_for_mail_reminder)
    end

end
