class Api::ListingsController < ApplicationController
    def index
        @listings = Listing.all
    end

    def create
        @listing = Listing.new(listing_params)
        if @listing.save
            render :show
        else
            render @listing.errors.full_messages, status: 422
        end
    end

    def show
        @listing = Listing.find(params[:id])
        @host = User.find(@listing.host_id)
        debugger
        render :show
    end

    # def update
    # end

    # def destroy
    # end

    private
    def listing_params
        params.require(listing).permit(
            # :id,
            # :host_id,
            :title,
            :description,
            :rate,
            :city,
            :address,
            :location_type,
            :longitude,
            :latitude,
            :num_bath,
            :expansion,
            :language,
            :min_players,
            :max_players,
            photos: []
        )
    end
end