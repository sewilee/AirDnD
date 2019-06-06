class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};
        this.updateMarker = this.updateMarker.bind(this)
    }

    componentDidUpdate(){
        // debugger
    }

    updateMarker(listings){
        const listingObj = {};
        
        listings.forEach( (listing) => {listingObj[listing.id] = listing})
        let newList = listings.filter( (listing) => !this.markers[listing.id])
        newList.forEach( (listing) => {this.createMarkerFromListing(listing)});
        let remove = Object.keys(this.markers).filter( (listingId) => {

            if(!listingObj[listingId]){
                return listingId
            }
        });
        remove.forEach( (listingId) => this.removeMarker(this.markers[listingId]));
    }

    createMarkerFromListing(listing){
        const position = new google.maps.LatLng(listing.latitude, listing.longitude)
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            listingId: listing.id,
        })
        this.markers[marker.listingId] = marker;
    }

    removeMarker(marker){
        // debugger
        // this.markers[marker.listingId].setVisible(false);
        marker.setMap(null);
        // debugger
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
        // debugger
    }
}

export default MarkerManager