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
        @reviews = Review.all
        render json: @reviews
    end

    private
    def review_params
        params.require(:reivew).permit(:body, :rating)
    end


end