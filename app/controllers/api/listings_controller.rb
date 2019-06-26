class Api::ListingsController < ApplicationController
    def index
        if (bounds && params[:searchFilter] || params[:searchFilter])
            # new_list = Listing.where(location_type: params[:searchFilter])
            new_list = Listing.where("UPPER(listings.location_type) LIKE :query OR UPPER(listings.city) LIKE :query OR UPPER(listings.title) LIKE :query", query: "%#{params[:searchFilter].upcase}%").includes(:review)
            new_list = new_list.uniq
        elsif bounds
            new_list = Listing.in_bounds(bounds).includes(:reviews)
        else
            new_list = Listing.all.includes(:reviews)
        end
        @listings = new_list
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
        listing = Listing.where(id: params[:id]).includes(:bookings, :host)
        @listing = listing[0]
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
            :edition_num,
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