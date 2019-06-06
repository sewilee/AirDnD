import React from 'react';
import MarkerManager from '../../util/marker_manager';


class ListingMap extends React.Component{
    constructor(props){
        super(props);
        // this.map = props;
        // this.markers = {};
    }

    componentDidMount(){
        debugger
        const{ singleListing, listings } = this.props

        let mapOptions;
        if(singleListing){
            mapOptions = {
                center: { lat: singleListing.latitude, lng: singleListing.longitude },
                zoom: 13
            }
        } else {
            mapOptions = {
                center: { lat: 40.736539, lng: -73.990873 },
                zoom: 13
        }
        };
        const map = this.refs.map;
        
        this.map = new google.maps.Map(map, mapOptions)
        this.MarkerManager = new MarkerManager(this.map);
        
        if(singleListing){
            this.props.fetchListing(singleListing.id)
        } else {
            this.registerListeners();
            this.MarkerManager.updateMarker(listings);
        }
    }

    componentDidUpdate(){
        if(this.props.singleListing){
            this.MarkerManager.updateMarker([this.props.singleListing])
        } else {
            this.MarkerManager.updateMarker(this.props.listings);
        }
    }
    // componentDidMount(){
    //     const mapOptions = {
    //         center: { lat: 40.673194, lng: -73.991466 },
    //         zoom: 10
    //     };
    //     const map = this.refs.map;
        
    //     this.map = new google.maps.Map(map, mapOptions)
    //     this.MarkerManager = new MarkerManager(this.map);
    //     this.registerListeners();
    // }
    
    // componentDidUpdate(){
    //     if(this.props.listings.length){
    //         this.MarkerManager.updateMarker(this.props.listings);
    //     }
    // }
    
    registerListeners(){
        google.maps.event.addListener(this.map, "idle", () =>{
            const bounds = this.map.getBounds();
            const northEast = bounds.getNorthEast();
            const southWest = bounds.getSouthWest();
            const newBounds = {
                northEast: { lat: northEast.lat(), lng: northEast.lng() },
                southWest: { lat: southWest.lat(), lng: southWest.lng() },
            }
            this.props.changeFilter("bounds", newBounds);
        });
    }

    render(){
        return(
            // <div id="map-container" ref={ map => this.mapNode = map }>
            <div id="map-container" ref="map">

            </div>
        )
    }
}

export default ListingMap;