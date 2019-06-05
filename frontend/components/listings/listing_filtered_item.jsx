import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingFilteredItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const listingId = this.props.listing.id;
        this.props.history.push(`/listings/${listingId}`)
    }

    phbEdition(num){
        if (num === 1) { return `${num}st edition` }
        if (num === 2) { return `${num}nd edition` }
        if (num === 3) { return `${num}rd edition` }
        else { return `${num}th edition` }
    };

    
    render() {
        const ratingIcon = (
            <div className="listing-item-rating-icon">
                <i className="fas fa-meteor"></i>
                <i className="fas fa-meteor"></i>
                <i className="fas fa-meteor"></i>
                <i className="fas fa-meteor"></i>
                <i className="fas fa-meteor"></i>
            </div>
        )
        
        const { title, rate, location_type,num_bath, expansion, edition_num, max_players  } = this.props.listing;
        let image_link = window.img_notfound;

        const edition = this.phbEdition(edition_num);
        let expansions = "Core rules only"
        if (!Object.keys(this.props.listing).length) {
            return null;s
        }

        if (this.props.listing.photoUrls.length) { image_link = this.props.listing.photoUrls[0] }

        return (
            <li className="filter-index-items-li" onClick={this.handleClick}>
                <div className="filter-item">
                    <img src={image_link} />
                </div>

                <div className="filter-item-info">
                    <div className="filter-listing-info">
                        <i className="fas fa-scroll"></i>
                        <h4>{location_type.toUpperCase()}</h4>
                        <h3>{title}</h3>
                        <div className="filter-details">
                            <p className="filter-info-text"> {`${max_players} players max`} &#183; {`PHB ${edition}`} &#183; {expansions} &#183; {`${num_bath} bath`}</p>
                        </div>
                    </div>
                    <div className="filter-item-rating">
                        <div className="filter-rating-icon">
                            {ratingIcon}<span>10</span>
                        </div>
                        <p className="filter-rates-text">
                            <i className="fas fa-coins"></i>
                            {rate} GP/night
                        </p>
                    </div>
                </div>
            </li>
        )
    }
}

export default withRouter(ListingFilteredItem);