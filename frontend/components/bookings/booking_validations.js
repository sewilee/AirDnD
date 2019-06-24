import moment from 'moment';

export const validDate = (start, end, bookings = []) => {

    for(let i = 0; i < bookings.length; i++){
        let existBookStart = moment(bookings[i].start_date);
        let existBookEnd = moment(bookings[i].end_date);
    
        if(start.isBetween(existBookStart, existBookEnd, null, []) || end.isBetween(existBookStart, existBookEnd, null, [])){
            return false;
        }
    }
    return true;
};