import React from 'react';
// import ListingMap from '../map/listing_map';
// import ListingIndexContainer from '../listings/listing_index';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: "",
        }
        this.updateSearch = this.updateSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    updateSearch(e){
        this.setState({
            search: e.currentTarget.value
        })
    }

    handleFilter(input){
        this.props.changeFilter("searchFilter", input)
    }

    handleSearch(e){
        e.preventDefault();
        // if(this.state.search){
        //     this.handleFilter(this.state.search)
        // }
        if(this.state.search){
            this.handleFilter(this.state.search)
            this.props.path.history.push(`/search/${this.state.search}`)
        } else {
            this.props.path.history.push('/search')
        }
        // this.props.path.history.push('/search')
    }

    render(){
        return(
            <div className="search-bar">
                <form onSubmit={this.handleSearch}>
                    <i className="fas fa-search"></i>
                    <input type="search" placeholder="Search" onChange={this.updateSearch}/>
                    <input type="submit" value="" className="search-submit"/>
                </form>
            </div> 
        )
    }
}

export default Search;