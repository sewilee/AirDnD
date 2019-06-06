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
    return (dispatch, getState) => {
        dispatch(updateFilter(filter, value));
        return fetchListings(getState().ui.filters)(dispatch);
    };
};