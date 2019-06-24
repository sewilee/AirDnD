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

    checkFilter(input){
        const types = {
            City: ["tarven", "bar", "city", "blacksmith"],
            Fortification: ["castle", "tower", "keep", "fort", "dungeon"],
            Wilderness: ["forest", "woods", "island", "swamp", "ocean", "cave"],
            "Religious Location": ["church", "temple", "sanctuary", "monastery", "tomb", "shrine", "religious"],
            "The Underdark": ["underground", "underdark"],
        }
        const filterKeys = Object.keys(types);
        for(let i = 0; i < filterKeys.length; i++){
            if(types[filterKeys[i]].indexOf(input) !== -1){
                return filterKeys[i];
            }
        }

        return input;
    }

    componentDidMount(){
        if (this.props.path){
            let pathName = this.props.path.location.pathname;
            if(pathName === "/search/"){
                pathName = pathName.split("/"); // ["search", "city"]
                if(pathName[2] !== -1){
                    const filter = pathName[2].split("%20").join(" ");
                    const type = this.checkFilter(filter);
                    this.handleFilter(type);
                }
            }
        }
    }

    updateSearch(e){
        this.setState({
            search: e.currentTarget.value
        })
    }

    handleFilter(input){
        const type = this.checkFilter(input)
        this.props.changeFilter("searchFilter", type)
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
        let className = "search-bar";
        let submitButton = "search-submit"
        if(this.props.page === "front-page"){ 
            className = "front-searchbar";
            submitButton = "front-submit"
        }

        return(
            <div className={className}>
                <form onSubmit={this.handleSearch}>
                    <i className="fas fa-search"></i>
                    <input type="search" placeholder="Search" onChange={this.updateSearch}/>
                    <input type="submit" value="" className={submitButton} value="Search"/>
                </form>
            </div> 
        )
    }
}

export default Search;