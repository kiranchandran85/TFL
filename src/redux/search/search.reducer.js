import Immutable from 'seamless-immutable';
import {FaultTypes} from '../util/apiThunkHelper';
import {SearchActionTypes} from './search.action';
export const INITIAL_STATE = new Immutable({
    routes: [],
    isLoading: false,
    isLoaded: false
});

export default (state = INITIAL_STATE, {payload = {}, requestObject= {}, type}) => {
    switch (type) {
        case SearchActionTypes.SEARCH.BEGIN:
            return state
                .set('isLoading', true)
                .set('isLoaded', false)
                .set('searchTerm', requestObject.searchValue)
                .set('searchList', requestObject.searchList);
        case SearchActionTypes.SEARCH.SUCCESS:
            return state
                .set(requestObject.searchValue, payload)
                .set('isLoading', false)
                .set('isLoaded', true);
        case SearchActionTypes.SEARCH.CACHED:
                    return state
                    .set('searchTerm', requestObject.searchValue)
                    .set('routes', state[requestObject.searchValue]);
        case FaultTypes.API_FAULT:
                    return state
                        .set('fault', payload.response)
                        .set('isLoaded', true)
                        .set('isLoading', false);      
        default:
            return state;
    }
};
