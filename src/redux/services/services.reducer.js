// import path from 'ramda/src/path';
import Immutable from 'seamless-immutable';
import {FaultTypes} from '../util/apiThunkHelper';
import {ServicesActionTypes} from './services.action';
export const INITIAL_STATE = new Immutable({
    services: [],
    isLoading: false,
    isLoaded: false
});

export default (state = INITIAL_STATE, {payload = {}, type}) => {
    switch (type) {
        case ServicesActionTypes.RETRIEVE_SERVICESS.BEGIN:
            return state
                .set('isLoading', true)
                .set('isLoaded', false);
        case ServicesActionTypes.RETRIEVE_SERVICESS.SUCCESS:
            return state
                .set('services', payload)
                .set('isLoading', false)
                .set('isLoaded', true);

        case FaultTypes.API_FAULT:
                    return state
                        .set('fault', payload)
                        .set('isLoaded', true)
                        .set('isLoading', false);      
        default:
            return state;
    }
};
