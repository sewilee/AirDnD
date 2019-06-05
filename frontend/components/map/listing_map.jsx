import React from 'react';

class ListingMap extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        const mapOptions = {
            center: { lat: 40.729442, lng: -73.998199},
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }

    render(){
        return(
            <div id="map-container" ref={ map => this.mapNode = map }>

            </div>
        )
    }
}

export default ListingMap;