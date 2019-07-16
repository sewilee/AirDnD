import React from 'react';
import ReviewIndexItem from './review_index_item';
import ReviewCreateContainer from './review_create_container';
import { merge } from 'lodash';
import { reviewRating } from './review_rating';

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { fetchReviews, listId } = this.props;
        fetchReviews(Number(listId));
    }

    componentDidUpdate(prevProps){
        if(Object.values(prevProps.reviews).length !== Object.values(this.props.reviews).length){
            const { fetchReviews, listId } = this.props;
            fetchReviews(Number(listId));
        }
    }

    showStars(rating){
        const iconRating = [];

        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                iconRating.push(<i className="fas fa-star" key={i}></i>)
            } else {
                iconRating.push(<i className="far fa-star" key={i}></i>)
            }
        }

        return iconRating;
    }

    // avgRating(reviews){
    //     let ratingSum = 0;

    //     reviews.forEach( review => {
    //         ratingSum += review.rating;
    //     });
    //     const avgSum = Math.floor(ratingSum / reviews.length);
        
    //     return this.showStars(avgSum);
    // }

    render(){
        const { reviews, users, prevBooking, deleteReview, currentUserId } = this.props;
        const { listId } = this.props;

        // let average = reviews.average;
        // delete reviews.average;
        // debugger
        let allReviews = merge({}, reviews);
        delete allReviews.average;
        allReviews = Object.values(allReviews);
        // debugger
        let numReviews;
        let iconRating;
        let reviewForm = null;
        if(prevBooking){
            reviewForm = <ReviewCreateContainer listId={listId} />
        }

        let showRating;
        let showReviews = (
            <h6 className="listing-details-header">There are currently no reviews.</h6>
            )
            
        if(allReviews.length){ 
            const { rating, communication, gameplay, story, roleplay, combat, dm } = reviews.average;
            numReviews = allReviews.length;
            iconRating = this.showStars(rating);
            // debugger
            showReviews = allReviews.map((review) => {
                return <ReviewIndexItem key={review.id} review={review} author={users[review.author_id]} deleteReview={deleteReview} currentUserId={currentUserId}/>
            })

            let commRating = this.showStars(communication);
            let gameplayRating = this.showStars(gameplay);
            let storyRating = this.showStars(story);
            let roleplayRating = this.showStars(roleplay);
            let combatRating = this.showStars(combat);
            let dmRating = this.showStars(dm);

            showRating = reviewRating({combatRating, gameplayRating, storyRating, storyRating, roleplayRating, dmRating, commRating});
            // showRating = (
            //     <>
            //         <ul className="multi-rating">
            //             <li>
            //                 <p>Story</p>
            //                 <span className="review-rating-icons">{storyRating}</span>
            //             </li>
            //             <li>
            //                 <p>Communication</p>
            //                 <span className="review-rating-icons">{commRating}</span>
            //             </li>
            //             <li>
            //                 <p>Game play</p>
            //                 <span className="review-rating-icons">{gameplayRating}</span>
            //             </li>
            //         </ul >
            //         <ul className="multi-rating">
            //             <li>
            //                 <p>Role play</p>
            //                 <span className="review-rating-icons">{roleplayRating}</span>
            //             </li>
            //             <li>
            //                 <p>Combat</p>
            //                 <span className="review-rating-icons">{combatRating}</span>
            //             </li>
            //             <li>
            //                 <p>Dungeon Master</p>
            //                 <span className="review-rating-icons">{dmRating}</span>
            //             </li>
            //         </ul>
            //     </>
            // );

        }
        return(
            <div className="listing-other-info">
                <div className="review-header">
                    <h3 className="listing-other-header pad-bottom">Reviews</h3>
                    <ul className="review-rating-icons" >{iconRating}</ul>
                    <span>{numReviews}</span>
                </div>
                <div className="review-header ratings">
                    {showRating}
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