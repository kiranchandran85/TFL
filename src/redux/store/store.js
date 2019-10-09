import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../tfl.reducers';

export default function configureStore() {
 return createStore(
    reducer,
   applyMiddleware(thunk)
 );
}