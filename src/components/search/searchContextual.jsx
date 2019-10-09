import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {SearchRoutes} from '../../redux/search/search.action';
import {Fault, Routes} from '../../redux/search/search.selectors';
import Search from './search';


const mapStateToProps = createStructuredSelector({
    apiFault: Fault,
    routes: Routes
});
const mapActionsToProps = {
    searchRoutes: SearchRoutes
};

export default connect(mapStateToProps, mapActionsToProps)(Search);
