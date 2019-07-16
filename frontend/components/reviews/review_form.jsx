import React from 'react';
import { merge } from 'lodash';
import { reviewRating } from './review_rating';


class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: "",
            communication: "",
            gameplay: "",
            story: "",
            roleplay: "",
            combat: "",
            dm: "",
            listing_id: Number(this.props.listId),
            error: "",
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
        const { body, communication, gameplay, story, roleplay, combat, dm } = this.state;
        if(!body || !communication || !gameplay || !story || !roleplay || !combat || !dm){
            let note = "Rating"
            if(body === ""){ note = "Review" }
            this.setState((prevState) => {
                return { ...prevState, error: `${note} box cannot be empty.` };
            })
        } else {
            const { createReview } = this.props;
            const review = merge({}, this.state);
            this.setState({
                body: "",
                communication: "",
                gameplay: "",
                story: "",
                roleplay: "",
                combat: "",
                dm: "",
                error: "",
            });
            createReview(review);
        }
    }

    showStars(rating, field){
        const radioRating = [];

        for (let i = 1; i < 6; i++) {
            if (rating >= i) {
                radioRating.push(
                    <label key={i}>
                        <input type="radio" name={field} value={i} checked={rating === i} onChange={this.handleInput(field)} />
                        <i className="fas fa-star"></i>
                    </label>
                )
            } else {
                radioRating.push(
                    <label key={i}>
                        <input type="radio" name={field} value={i} checked={rating === i} onChange={this.handleInput(field)} />
                        <i className="far fa-star"></i>
                    </label>
                )
            }
        }

        return radioRating;
    }

    render(){
        const { communication, gameplay, story, roleplay,combat, dm , error } = this.state;

        let commRating = this.showStars(communication, "communication");
        let gameplayRating = this.showStars(gameplay, "gameplay");
        let storyRating = this.showStars(story, "story");
        let roleplayRating = this.showStars(roleplay, "roleplay");
        let combatRating = this.showStars(combat, "combat");
        let dmRating = this.showStars(dm, "dm");

        let showRating = reviewRating({combatRating, gameplayRating, storyRating, roleplayRating, commRating, dmRating});

        return(
            <div className="review-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="image-radio">
                        {showRating}
                    </div>
                    {/* <input type="text" value={this.state.body} onChange={this.handleInput("body")}/>     */}
                    <textarea value={this.state.body} onChange={this.handleInput("body")}></textarea>
                    <p className="error-text">{error}</p>
                    <input type="submit" value="Add Review" className="review-submit"/>
                </form>
            </div>
        )
    }
}

export default ReviewForm;