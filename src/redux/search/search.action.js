import {apiThunkHelper} from '../util/apiThunkHelper';

export const SearchActionTypes = {
    SEARCH: {
        BEGIN: 'SEARCH.BEGIN',
        SUCCESS: 'SEARCH.SUCCESS',
        FAILURE: 'SEARCH.FAILURE'
    }
};

export const SearchRoutes = (searchTerm) => {
    let searchUrl = 'https://api.tfl.gov.uk/BikePoint/Search';
    if(searchTerm.length){
        searchUrl+= '?query=' + searchTerm;
    }
    return (dispatch) => {
        return apiThunkHelper(dispatch, searchUrl, SearchActionTypes.SEARCH);
    };
};