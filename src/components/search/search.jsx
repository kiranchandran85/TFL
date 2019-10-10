import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Loader from 'react-loader-spinner';
import './search.scss';

class Search extends Component {

  constructor(props){
    super(props);
    this.state ={
      searchVal: ''
    }
  }
 handleChange = () => {
  let arr = Array.from(this.props.lastSearchTerms); 
  this.setState({searchVal: this.search.value});
  if(!this.search.value){
    return;
  }
  if(!this.props.lastSearchTerms.includes(this.search.value)){
    arr.push(this.search.value);
    this.props.searchRoutes(this.search.value, arr);
  }
  else{
    this.props.cachedRoutes(this.search.value);
  }
 }

 render() {
   return (
     <div className="searchArea">
        <div>
            <form>
            Search Routes <input
                placeholder="Search for routes..."
                ref={input => this.search = input}
                onChange={this.handleChange}
            />
            </form>
        </div>
        {!Boolean(this.props.isLoaded) && <Loader/>}
        <div className="searchResults">
        {Boolean(this.search && this.props.isLoaded && !this.props.routes.length) &&<div className="noResult">{`No bike points found for '${this.search.value}'`}</div>}
          <div className="results">
            <ul>
              {Boolean(this.state.searchVal && this.props.routes.length) && this.props.routes.map((route) => {
                const item = `${route.id.split('_')[1]} ${route.commonName} (${route.lat}, ${route.lon})`;
                return (                
                <li key={route.id}>{item}</li>
              );
              })}
            </ul>
          </div>
        </div>
     </div>
   )
 }

}

Search.displayName = 'Search';
Search.propTypes = {
  apiFault: PropTypes.shape({}),
  cachedRoutes: PropTypes.func,
  isLoaded: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.shape({})),
  searchRoutes: PropTypes.func,
  lastSearchTerms: PropTypes.arrayOf(PropTypes.string)

}

export default Search