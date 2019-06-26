import React from 'react';
import BookingIndexItem from './booking_index_items';

class BookingIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const { fetchBookings, currentUserId } = this.props
        fetchBookings(currentUserId);
    }

    render(){
        const { bookings, listings } = this.props.bookings;
        const { deleteBooking } = this.props;

        let books = (
            <>
                <p>Oh no! You have no upcoming campaigns. Start exploring ideas for your next game.</p>
                <img className="booking-notfound" src={window.vox_machina}/>
                <p className="booking-notfound-p">Feature Image Credit: Amanda Oliver Elm  @flyboy_elm</p>
            </>
        )

        if (bookings instanceof Object && Object.values(bookings).length){
            books = Object.values(bookings).map( book => {
                return (
                    <BookingIndexItem key={book.id} booking={book} listing={listings[book.listing_id]} deleteBooking={deleteBooking}/>
                )
            });
        }
        
        return(
            <section className="book-page">
                <div className="book-index-items">
                    <h1>Upcoming plans</h1>
                    {books}
                </div>
            </section>
        )
    }

}

export default BookingIndex;