import { fetchListings } from './listing_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter, value) => {
    return({
        type: UPDATE_FILTER,
        filter,
        value,
    })
}

export const changeFilter = (filter, value) => {
    debugger
    return (dispatch, getState) => {
        debugger
        dispatch(updateFilter(filter, value));
        debugger
        return fetchListings(getState().ui.filters)(dispatch);
    };
};