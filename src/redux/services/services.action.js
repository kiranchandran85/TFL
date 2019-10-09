import {apiThunkHelper} from '../util/apiThunkHelper';

export const ServicesActionTypes = {
    RETRIEVE_SERVICESS: {
        BEGIN: 'RETRIEVE_SERVICESS.BEGIN',
        SUCCESS: 'RETRIEVE_SERVICESS.SUCCESS',
        FAILURE: 'RETRIEVE_SERVICESS.FAILURE'
    }
};

const servicesUrl = ' https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true';

export const RetrieveServices = () => {
    return (dispatch, getState) => {
        return apiThunkHelper(dispatch, servicesUrl, ServicesActionTypes.RETRIEVE_SERVICESS);
    };
};