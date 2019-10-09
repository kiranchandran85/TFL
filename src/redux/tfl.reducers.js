import {combineReducers} from 'redux';
import searchReducer from './search/search.reducer';
import servicesReducer from './services/services.reducer';

const appReducer =  combineReducers({
    servicesClient: servicesReducer,
    searchClient: searchReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_STATE') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer;
