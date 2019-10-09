import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
// import {Fault} from 'selfcare-core/src/redux/fault/fault.selectors';
import {RetrieveServices} from '../../redux/services/services.action';
import {Fault, ServicesItemsIsLoaded, SortedServicesItems} from '../../redux/services/services.selectors';
import Header from './header';


const mapStateToProps = createStructuredSelector({
    apiFault: Fault,
    isLoaded: ServicesItemsIsLoaded,
    menuItems: SortedServicesItems
});
const mapActionsToProps = {
    retrieveServices: RetrieveServices
};

export default connect(mapStateToProps, mapActionsToProps)(Header);
