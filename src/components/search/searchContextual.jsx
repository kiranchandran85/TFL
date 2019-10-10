import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {CachedRoutes, SearchRoutes} from '../../redux/search/search.action';
import {Fault, Routes, RoutesItemsIsLoaded, SearchTerms} from '../../redux/search/search.selectors';
import Search from './search';


const mapStateToProps = createStructuredSelector({
    apiFault: Fault,
    isLoaded: RoutesItemsIsLoaded,
    routes: Routes,
    lastSearchTerms: SearchTerms
});
const mapActionsToProps = {
    cachedRoutes: CachedRoutes,
    searchRoutes: SearchRoutes
};

export default connect(mapStateToProps, mapActionsToProps)(Search);
