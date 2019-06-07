import React from 'react';
import SearchContainer from '../search/search_container';

const SearchFrontPage = (props) => {
    const playerOptions = []
    for (let i = 2; i < 10; i++) {
        playerOptions.push(
            <option key={i} value={i}>{i} players</option>
        )
    };

    return (
        <div className="search-front">
            <h2>Random chance plays a huge part in everybody's life</h2>
            <section>
                <li className="front-search-label">
                    <h6 className="front-search-label" >CAMPAIGN LOCATION</h6>
                    <SearchContainer path={props.path} page="front-page"/>
                </li>
                <li className="front-dates">
                    <div>
                        <h6 className="front-search-label">START DATE</h6>
                        <input type="date" />
                    </div>
                    <div>
                        <h6 className="front-search-label">END DATE</h6>
                        <input type="date" />
                    </div>
                </li>
                <li className="front-players">
                    <h6 className="front-search-label">PARTY SIZE</h6>
                    <select className="booking-players-input">
                        {playerOptions}
                    </select>
                </li>
            </section>
        </div>
    )
};

export default SearchFrontPage;