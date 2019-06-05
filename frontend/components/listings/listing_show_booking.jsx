import React from 'react';

class BookingBox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { rate } = this.props;
        return(
            <div className="booking-container">
                <section className="booking-rate">
                    <i className="fas fa-coins"></i>
                    <span className="booking-cost">  {rate}</span>
                    <span className="booking-text-small">  GP per night</span> 
                </section>
                <section className="booking-info">
                    <div className="booking-date">
                        <p className="booking-text-small">Dates</p>
                        <div className="booking-calendar">
                            <input type="text" placeholder="start"/>
                            <i className="fas fa-feather-alt"></i>
                            <input type="text" placeholder="end"/>
                        </div>
                    </div>
                    <div className="booking-players">
                        <p className="booking-text-small">Party Size</p>
                        <div className="booking-players-dd">
                            <select className="booking-players-input">
                                <option value="">players</option>
                            </select>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </section>
                <button className="booking-submit">Roll for it</button>
            </div>
        )
    }
}

export default BookingBox;