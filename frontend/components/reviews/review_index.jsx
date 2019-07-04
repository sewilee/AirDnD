import React from 'react';
import ReviewIndexItem from './review_index_item';
import ReviewCreateContainer from './review_create_container';

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

        const avgSum = Math.floor(ratingSum / reviews.length);
        
        for(let i = 0; i < 5; i++){
            if(i < avgSum){
                iconRating.push(<i className="fas fa-star" key={i}></i>)
            } else {
                iconRating.push(<i className="far fa-star" key={i}></i>)
            }
        }
        return iconRating;
    }

    render(){
        const { reviews, users } = this.props;
        const { listId } = this.props;
        let allReviews = Object.values(reviews);
        let numReviews;
        let iconRating;
        let reviewForm = null;
        // if(currentUser){
        //     reviewForm = <ReviewCreateContainer listId={listId} />
        // }


        let showReviews = (
            <h6 className="listing-details-header">There are currently no reviews.</h6>
            )
            
        if(allReviews.length){ 
            // allReviews = Object.values(reviews)
            // if(reviews.length){
            numReviews = allReviews.length;
            iconRating = this.avgRating(allReviews);
            showReviews = allReviews.map((review) => {
                return <ReviewIndexItem key={review.id} review={review} author={users[review.author_id]}/>
            })

            // }
        }
        
        return(
            <div className="listing-other-info">
                <div className="review-header">
                    <h3 className="listing-other-header pad-bottom">Reviews</h3>
                    <ul className="review-rating-icons" >{iconRating}</ul>
                    <span>{numReviews}</span>
                </div>
                <ul className="reviews">
                    {showReviews}
                </ul>
                {reviewForm}
            </div>
        )
    }
}

export default ReviewIndex;