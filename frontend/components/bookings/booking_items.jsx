import React from 'react';
// import Calendar from '../calendar/calendar';

export const Dates = (props) => {
    const { handleInput } = props;

    return (
        <div className="booking-date">
            <p className="booking-text-small">Dates</p>
            <div className="booking-calendar">
                <div className="booking-date">
                    <p className="booking-text-small">Dates</p>
                    <div className="booking-calendar">
                        <input type="date" onChange={handleInput("start_date")}/>
                        <i className="fas fa-feather-alt"></i>
                        <input type="date" onChange={handleInput("end_date")}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export const Players = (props) => {
    const { maxPlayers, handleInput } = props;
    const playerOptions = []
    for(let i = 2; i < maxPlayers; i++){
        playerOptions.push(
            <option key={i} value={i}>{i} players</option>
        )
    };

    return (
        <div className="booking-players">
            <p className="booking-text-small">Party Size</p>
            <div className="booking-players-dd">
                <select className="booking-players-input" onChange={handleInput("players")}>
                    {playerOptions}
                </select>
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    )
};

