class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        @review.listing_id = params[:review][:listingId]
        if @review.save
            render json: @review
        else
            render @review.errors.full_messages, status: 422
        end
    end

    def index
        id = params[:listing_id]
        @reviews = Review.where(listing_id: id).includes(:author)
        render :index
    end

    private
    def review_params
        params.require(:review).permit(:body, :rating, :listing_id)
    end


end