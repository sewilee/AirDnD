import React from 'react';
import { merge } from 'lodash';

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: "",
            rating: "",
            listing_id: Number(this.props.listId),
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field){
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value,
            })
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const { createReview } = this.props;
        const review = merge({}, this.state);
        createReview(review);
    }

    render(){
        const { rating } = this.state;
        let radioRating = [];
        for(let i = 1; i < 6; i++){
            if(rating >= i){
                radioRating.push(
                    <label key={i}>
                        <input type="radio" name="rating" value={i} onChange={this.handleInput("rating")}/>
                        <i className="fas fa-star"></i>
                    </label>
                )
            } else {
                radioRating.push(
                    <label key={i}>
                        <input type="radio" name="rating" value={i} onChange={this.handleInput("rating")} />
                        <i className="far fa-star"></i>
                    </label>
                )
            }
        }

        return(
            <div className="review-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="image-radio">
                        {radioRating}
                    </div>
                    <input type="text" defaultValue={this.state.body} onChange={this.handleInput("body")}/>    
                    <input type="submit" value="Add Review" className="review-submit"/>
                </form>
            </div>
        )
    }
}

export default ReviewForm;