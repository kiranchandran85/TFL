import {apiThunkHelper} from '../util/apiThunkHelper';
export const SearchActionTypes = {
    SEARCH: {
        BEGIN: 'SEARCH.BEGIN',
        CACHED: 'SEARCH.CACHED',
        SUCCESS: 'SEARCH.SUCCESS',
        FAILURE: 'SEARCH.FAILURE'
    }
};

export const SearchRoutes = (searchTerm, searchList) => {
    let searchUrl = 'https://api.tfl.gov.uk/BikePoint/Search?query=' + searchTerm;
    return (dispatch) => {
        return apiThunkHelper(dispatch, searchUrl, SearchActionTypes.SEARCH, {searchList: searchList, searchValue: searchTerm});
    };
};

export const CachedRoutes = (searchValue) => {
    return (dispatch) => {
        dispatch({
            type: SearchActionTypes.SEARCH.CACHED,
            payload: {},
            requestObject: {searchValue: searchValue}
        });
    };
};