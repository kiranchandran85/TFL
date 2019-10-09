// import path from 'ramda/src/path';
import Immutable from 'seamless-immutable';
import {FaultTypes} from '../util/apiThunkHelper';
import {SearchActionTypes} from './search.action';
export const INITIAL_STATE = new Immutable({
    routes: [],
    isLoading: false,
    isLoaded: false
});

export default (state = INITIAL_STATE, {payload = {}, type}) => {
    switch (type) {
        case SearchActionTypes.SEARCH.BEGIN:
            return state
                .set('isLoading', true)
                .set('isLoaded', false);
        case SearchActionTypes.SEARCH.SUCCESS:
            return state
                .set('routes', payload)
                .set('isLoading', false)
                .set('isLoaded', true);
        case FaultTypes.API_FAULT:
                    return state
                        .set('routesFault', payload)
                        .set('isLoaded', true)
                        .set('isLoading', false);      
        default:
            return state;
    }
};
