import axios from 'axios';
export const FaultTypes = {
    API_FAULT: 'API_FAULT'
};

export const ApiFault = (fault, requestObject) => {
    return {
        type: FaultTypes.API_FAULT,
        payload: fault,
        requestObject
    };
};

const thunkHelper = async (dispatch, {BEGIN, SUCCESS}, config, requestObject) => {
    dispatch({
        type: BEGIN,
        requestObject
    });

    let result;

    try {
        result = await axios(config);
    } catch (err) {
        const fault = {
            resposnse:err.response,
            trigger: BEGIN
        };

        dispatch(ApiFault(fault, requestObject));

        throw fault;
    }

    const {data} = result;

    if (data.Fault) {
        if (data.Fault.Code === 1) {
            dispatch({
                type: SUCCESS,
                payload: {},
                requestObject
            });

            return;
        }

        const fault = {
            fault: data.Fault,
            trigger: BEGIN
        };

        dispatch(ApiFault(fault, requestObject));

        throw fault;
    }

    dispatch({
        type: SUCCESS,
        payload: data,
        requestObject
    });

    return data;
};

export const apiThunkHelper = (dispatch, url, types, requestObject={}) => {

    const apiConfig = {
        method: 'get',
        // data: requestObject,
        url: url
    };

    return thunkHelper(dispatch, types, apiConfig, requestObject);
};