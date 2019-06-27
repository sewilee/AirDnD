import React from 'react';
import { merge } from 'lodash';

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: "",
            rating: "",
            listing_id: "",
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
        return(
            <div className="review-form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="radio" name="rating" value="1" onChange={this.handleInput("rating")}/>
                        <input type="radio" name="rating" value="2" onChange={this.handleInput("rating")}/>
                        <input type="radio" name="rating" value="3" onChange={this.handleInput("rating")}/>
                        <input type="radio" name="rating" value="4" onChange={this.handleInput("rating")}/>
                        <input type="radio" name="rating" value="5" onChange={this.handleInput("rating")}/>
                    </div>
                    <input type="textarea" defaultValue={this.state.body} onChange={this.handleInput("body")}/>    
                    <input type="submit" value="Add Review"/>
                </form>
            </div>
        )
    }
}

export default ReviewForm;