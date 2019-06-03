import React from 'react';

const phbEdition = (num) => {
    if (num === 1){return `${num}st edition`}
    if (num === 2){return `${num}nd edition`}
    if (num === 3){return `${num}rd edition`}
    else {return `${num}th edition`}
};

class ListingShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.listingId);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.listingId !== this.props.listingId){
            this.props.fetchListing(this.props.listingId);
        }
    }

    render(){
        const { 
            title, description, city, num_bath, host_id, language,
            edition_num, expansion,location_type, max_players, min_player, photoUrls,
        } = this.props.listing;
        debugger
        let images = null;
        if(this.props.listing.photoUrls){ images = photoUrls.map( (url, idx) => <img key={idx} src={url}/>)}

        // const edition = phbEdition(edition_num); only if you're hosting a campaign
        // let expansions = "Core rules only" only if you're hosting a campaign

        return(
            <div className="listing-page">
                <section className="listing-show-img">
                    {images}
                </section>
                <main className="listing-show-main">
                    <div>
                        <div>
                            <h1>{title}</h1>
                        </div> 
                        <div>
                            
                        </div>
                    </div>
                    <div>
                        <p>{city}</p>
                    </div>
                    <ul>
                        <li>
                            <h6>{location_type}</h6>
                            {/* <span>{`PHB ${edition}`}</span> */}
                            {/* <span>{expansions}</span> */}
                            <span>{`${max_players} players max`}</span>
                            <span>{`${num_bath} bath`}</span>
                        </li>
                    </ul>
                </main>
                <aside className="listing-show-book">
                
                </aside>
            </div>
        )
    }
}

export default ListingShow;