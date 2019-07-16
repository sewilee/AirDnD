import React from "react";

export const reviewRating = (props) => {
    const {storyRating, commRating, gameplayRating, roleplayRating, combatRating, dmRating} = props;
    return (
        <>
            <ul className="multi-rating">
                <li>
                    <p>Story</p>
                    <span className="review-rating-icons">{storyRating}</span>
                </li>
                <li>
                    <p>Communication</p>
                    <span className="review-rating-icons">{commRating}</span>
                </li>
                <li>
                    <p>Game play</p>
                    <span className="review-rating-icons">{gameplayRating}</span>
                </li>
            </ul >
            <ul className="multi-rating">
                <li>
                    <p>Role play</p>
                    <span className="review-rating-icons">{roleplayRating}</span>
                </li>
                <li>
                    <p>Combat</p>
                    <span className="review-rating-icons">{combatRating}</span>
                </li>
                <li>
                    <p>Dungeon Master</p>
                    <span className="review-rating-icons">{dmRating}</span>
                </li>
            </ul>
        </>
    );
}