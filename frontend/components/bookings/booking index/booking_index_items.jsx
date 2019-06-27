import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(){
        this.props.deleteBooking(this.props.booking.id)
    }

    handleClick() {
        const listingId = this.props.listing.id;
        this.props.history.push(`/listings/${listingId}`)
    }

    phbEdition(num) {
        if (num === 1) { return `${num}st edition` }
        if (num === 2) { return `${num}nd edition` }
        if (num === 3) { return `${num}rd edition` }
        else { return `${num}th edition` }
    };

    render() {
        const { title, location_type, edition_num } = this.props.listing;
        const { start_date, end_date, status, players} = this.props.booking;
        const edition = this.phbEdition(edition_num);
        let expansions = "Core rules only"
        
        let image_link = window.img_notfound;
        if (this.props.listing.photoUrls.length) { image_link = this.props.listing.photoUrls[0] }

        let cancelGame = <button className="book-remove" onClick={this.handleRemove}>Cancel Game</button>;
        if(status === "approved"){ cancelGame = null }

        let bookClass = "book-index-items-li"
        const today = new Date();
        const endDate = new Date(end_date)
        if (endDate < today){ bookClass = "book-index-items-li past" }
        
        return (
            <li className={bookClass}>
                <div className="book-item" onClick={this.handleClick}>
                    <img src={image_link} />
                </div>

                <div className="book-item-info">
                    <div className="book-listing-info">
                        <h4>{location_type.toUpperCase()}</h4>
                        <h3>{title}</h3>
                        <div className="book-details">
                            <p className="book-info-text"> {`${players} players`} &#183; {edition} &#183; {expansions}</p>
                        </div>
                    </div>
                    <div className="book-info">
                        <p className="book-info-text">
                            status:
                            <span className="status"> {status.toUpperCase()}</span>
                        </p>
                        <div className="book-info-dtls">
                            <p className="book-info-text">
                                <i className="far fa-calendar"></i>
                                <span>{start_date}</span>
                                <i className="fas fa-arrow-right"></i>
                                <span>{end_date}</span>
                            </p>
                            {cancelGame}
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default withRouter(BookingIndexItem);