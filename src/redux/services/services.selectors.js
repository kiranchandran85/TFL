import pathOr from 'ramda/src/pathOr';
import sort from 'ramda/src/sort';
import {createSelector} from 'reselect';

export const ServicesClient = (store) => {
    return pathOr([], ['servicesClient'], store);
};



export const ServicesItems = createSelector([
    ServicesClient
], (services) => {
    return pathOr([], ['services'], services);
});

export const ServicesItemsIsLoading = createSelector([
    ServicesClient
], (services) => {
    return pathOr([], ['isLoading'], services);
});

export const SortedServicesItems = createSelector([
    ServicesItems
], (servicesItems) => {
    if(servicesItems && servicesItems.length){
        return sort((a, b) => a && a.name.localeCompare(b.name), sort((a, b) => a && a.modeName.localeCompare(b.modeName), servicesItems));
    }
});

export const ServicesItemsIsLoaded = createSelector([
    ServicesItems,
    ServicesItemsIsLoading
], (searchResults, isLoading) => {
    return searchResults !== [] && !isLoading;
});

export const Fault = createSelector([
], (store) => {
    return pathOr(null, ['fault'], store);
});