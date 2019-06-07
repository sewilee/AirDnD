class Api::BookingsController < ApplicationController
    def index
        @booking = Booking.where(guest_id: current_user.id).include(:listing)
        render :index
    end

    def create
        @booking = Booking.new(booking_params)
        @booking.guest_id = current_user.id
        @booking.listing_id = params[:booking][:listingId]
        if @booking.save
            render :show
        else
            render @booking.errors.full_messages, status: 422
        end
    end


    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
        render "api/listings/show"
    end

    private

    def booking_params
        params.require(:booking).permit(:start_date, :end_date, :players)
    end
end