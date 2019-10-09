import pathOr from 'ramda/src/pathOr';
import {createSelector} from 'reselect';

export const RoutesClient = (store) => {
    return pathOr([], ['searchClient'], store);
};

export const Routes = createSelector([
    RoutesClient
], (routes) => {
    return pathOr([], ['routes'], routes);
});

export const Fault = createSelector([
], (store) => {
    return pathOr(null, ['routesFault'], store);
});