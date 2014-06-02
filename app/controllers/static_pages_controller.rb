class StaticPagesController < ApplicationController

    def home
        @guest = Guest.new()
    end

    def register_guest
        @guest = Guest.new(guest_params)

        result = @guest.save

        respond_to do |format|
            format.json {
                render json: {result: result, guest_params: guest_params},
                status: result != true ? 400 : 200
            }
        end
    end

    private

    def guest_params
        params[:guest].permit(:name, :email, :comment, :will_be_present)
    end

end