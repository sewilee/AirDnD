class Api::ListingsController < ApplicationController
    def index
        if (bounds && params[:searchFilter])
            debugger
            new_list = Listing
                .where(location_type: params[:searchFilter])
            debugger
        elsif bounds
            new_list = Listing.in_bounds(bounds)
            debugger
                # .group_by(:id)
        else
            new_list = Listing.all
        end
        @listings = new_list
        debugger
    end

    def creates
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

    def bounds 
        params[:bounds]
    end

end