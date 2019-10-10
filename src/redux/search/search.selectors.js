import pathOr from 'ramda/src/pathOr';
import {createSelector} from 'reselect';

export const RoutesClient = (store) => {
    return pathOr([], ['searchClient'], store);
};

export const SearchTerms = createSelector([
    RoutesClient
], (routes) => {
    return pathOr([], ['searchList'], routes);
});

const SearchTerm = createSelector([
    RoutesClient
], (routes) => {
    return pathOr([], ['searchTerm'], routes);
});

export const Routes = createSelector([
    RoutesClient,
    SearchTerm
], (routes, searchTerm) => {
    return pathOr([], [searchTerm], routes);
});

export const Fault = createSelector([
], (store) => {
    return pathOr(null, ['routesFault'], store);
});

export const RoutesItemsIsLoading = createSelector([
    RoutesClient
], (routesClient) => {
    return pathOr([], ['isLoading'], routesClient);
});

export const RoutesItemsIsLoaded = createSelector([
    Routes,
    RoutesItemsIsLoading
], (searchResults, isLoading) => {
    return searchResults !== [] && !isLoading;
});