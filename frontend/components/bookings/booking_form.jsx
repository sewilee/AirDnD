import React from 'react';
import { Redirect } from 'react-dom';
import { merge } from 'lodash';
import { Dates, Players } from './booking_items';
import { validDate } from './booking_validations';


class BookingForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            listingId: this.props.listingId,
            start_date: "",
            end_date: "",
            players: "2",
            errors: "",
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getDays(){
        const date1 = new Date(this.state.start_date);
        const date2 = new Date(this.state.end_date);
        const diffTime = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    handleInput(field){
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value,
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.props.currentUserId){
            if(validDate(this.state.start_date, this.state.end_date)){
                const { listingInfo, createBooking} = this.props;
                const booking = merge({}, this.state);
                this.props.path.history.push({
                    pathname: `/listings/${this.props.listingId}/payment/v1`,
                    state: {props: {listingInfo, createBooking, booking, days: this.getDays()}}
                });
                // this.props.createBooking(booking);
                // this.props.openModal("booking-submitted");
                // this.setState({
                //         start_date: "",
                //         end_date: "",
                //         players: "",
                //         errors: "", 
                //     });
            }else{
                this.setState({
                    errors: "Please enter valid dates",
                })
            }
        } else {
            e.stopPropagation();
            this.props.openModal("login");
        }
    }

    render() {
        const { rate, maxPlayers } = this.props.listingInfo;
        const { start_date, end_date } = this.state;
        let totalCost = null;
        if(validDate(start_date, end_date)){
            const subPrice = rate * this.getDays();
            const serviceFee = Math.floor(rate / 25);
            const total = serviceFee + subPrice;
            totalCost = (
                <div className="booking-rate-info">
                    <li className="rate-info-li">
                        <span>{rate} gp x {this.getDays()}</span>
                        <span>{subPrice} gp</span>
                    </li>
                    <li className="rate-info-li">
                        <span>Service fee</span>
                        <span>{serviceFee} gp</span>
                    </li>
                    <li className="rate-info-li total">
                        <span>Total</span>
                        <span>{total} gp</span>
                    </li>
                </div>
            );
        }

        let errors = null;
        if(this.state.errors){ errors = (
            <p className="booking-errors">{this.state.errors}</p>
            );
        }

        return (
            <form className="booking-container" onSubmit={this.handleSubmit}>
                <section className="booking-rate">
                    <i className="fas fa-coins"></i>
                    <span className="booking-cost">  {rate}</span>
                    <span className="booking-text-small">  gp per night</span>
                </section>
                <section className="booking-info">
                    <Dates handleInput={this.handleInput}/>
                    {errors}
                    <Players maxPlayers={maxPlayers} handleInput={this.handleInput}/>
                    {totalCost}
                </section>
                <input type="submit" value="Roll for it" className="booking-submit"/>
            </form>
        )
    } 
}

export default BookingForm;