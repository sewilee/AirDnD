import React from 'react';
// import ListingMap from '../map/listing_map';
// import ListingIndexContainer from '../listings/listing_index';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    

    handleSearch(e){
        debugger
        e.preventDefault();
        this.props.path.history.push('/search')
    }

    render(){
        return(
            <div className="search-bar">
                <form onSubmit={this.handleSearch}>
                    <i className="fas fa-search"></i>
                    <input type="search" placeholder="Search" />
                    {/* <input type="submit" value="" className="search-submit"/> */}
                </form>
            </div> 
        )
    }
}

export default Search;