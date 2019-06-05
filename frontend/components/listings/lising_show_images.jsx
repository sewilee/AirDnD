import React from 'react';

const ListingImages = (props) => {
    const { photoUrls } = props;

    return (
        <div className="image-container">
            <img className="main-image" src={photoUrls[0]}/>
            <div className="side-image">
                <img src={photoUrls[1]} className="image up-1"/>
                <img src={photoUrls[2]} className="image down-1"/>
            </div>
            <div className="side-image">
                {/* <img src={photoUrls[3]} className="image-up-2" />
                <img src={photoUrls[4]} className="image-down-3" /> */}
                <img src={photoUrls[3]} className="image up-2" />
                <img src={photoUrls[4]} className="image down-2" />
            </div>
        </div>
        // <div className="listing-image-container">
        //     <div className="listing-image-main">
        //         {mainImage}
        //     </div>
        //     <div className="listing-image-side">
        //         {sideImage}
        //         <img src={window.img_notfound}/>
        //         <img src={window.img_notfound}/>
        //     </div>
        // </div>
    )
};

export default ListingImages;