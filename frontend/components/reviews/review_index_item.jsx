import React from 'react';

const createdDate = (date) => {
    const newDate = new Date(date);
    const month = new Array();

    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    
    const year = newDate.getFullYear();
    return `${month[newDate.getMonth()]} ${year}`;
}


const ReviewIndexItem = (props) => {
    const { body, created_at } = props.review;
    const { fname } = props.author;

    return(
        <li className="review-items">
            <div className="review-author">
                <img src={window.user_icon_d20} />
                <div>
                    <h3>{fname}</h3>
                    <h6>{createdDate(created_at)}</h6>
                </div>
            </div>
            <p>{body}</p>
        </li>
    )
}

export default ReviewIndexItem;