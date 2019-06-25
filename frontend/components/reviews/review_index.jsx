import React from 'react';

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { fetchReviews, listId } = this.props;
        fetchReviews(listId);
    }

    render(){
        const { reviews } = this.props;
        let showReviews = (
            <h6 className="listing-details-header">There are currently no reviews.</h6>
        )
        // debugger
        return(
            <div className="listing-other-info">
                <h3 className="listing-other-header pad-bottom">Reviews</h3>
                {showReviews}
                {/* <div className="policy">
                    <h4 className="listing-details-header bordered-top">Cancellations</h4>
                    <h6 className="listing-details-header">{cancelType} · Free cancellation for 48 hours</h6>
                    <p className="listing-info-text">After that, cancel up to {day} days before check-in and get a full refund, minus the service fee.</p>
                </div> */}
            </div>
        )
    }
}

export default ReviewIndex;