import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { fetchReviews, listId } = this.props;
        fetchReviews(Number(listId));
    }

    avgRating(reviews){
        let ratingSum = 0;
        const iconRating = [];

        reviews.forEach( review => {
            ratingSum += review.rating;
        });

        const avgSum = ratingSum / reviews.length;
        
        for(let i = 0; i < 5; i++){
            if(i < avgSum){
                iconRating.push(<i className="fas fa-star"></i>)
            } else {
                iconRating.push(<i className="far fa-star"></i>)
            }
        }
        return iconRating;
    }

    render(){
        const { review, author } = this.props.reviews;
        let reviews;
        let reviewLength;
        let iconRating;

        let showReviews = (
            <h6 className="listing-details-header">There are currently no reviews.</h6>
            )
            
        if(review){ 
            reviews = Object.values(review)
            if(reviews.length){
                reviewLength = reviews.length;
                iconRating = this.avgRating(reviews);
                showReviews = reviews.map((review) => {
                    return <ReviewIndexItem key={review.id} review={review} author={author[review.author_id]}/>
                })

            }
        }
        
        return(
            <div className="listing-other-info">
                <div className="review-header">
                    <h3 className="listing-other-header pad-bottom">{`${reviewLength} Reviews`}</h3>
                    <ul className="review-rating-icons">{iconRating}</ul>
                </div>
                <ul className="reviews">
                    {showReviews}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex;