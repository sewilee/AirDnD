class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        @review.listing_id = params[:review][:listing_id]

        avg_rating = [
            @review.communication, 
            @review.gameplay,
            @review.story,
            @review.roleplay,
            @review.combat,
            @review.dm].sum / 5
        
        @review.rating = avg_rating

        if @review.save
            render json: @review
        else
            render @review.errors.full_messages, status: 422
        end
    end

    def index
        id = params[:listing_id]
        @reviews = Review.where(listing_id: id).includes(:author)
        if @reviews.length > 0
            count = @reviews.count
            @rating = @reviews.sum(:rating) / count
            @communication = @reviews.sum(:communication) / count
            @gameplay = @reviews.sum(:gameplay) / count
            @story = @reviews.sum(:story) / count
            @roleplay = @reviews.sum(:roleplay) / count
            @combat = @reviews.sum(:combat) / count
            @dm = @reviews.sum(:dm) / count
        end
        render :index
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render json: @review
    end

    private
    def review_params
        params.require(:review).permit(:body, :listing_id, :communication, :gameplay, :story, :roleplay, :combat, :dm)
    end

end