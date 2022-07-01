import {createStore, applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import {item_reducer} from './all/reducer';

const composeEnhancers =
  typeof window === 'object' &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const middleware=[thunk]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const rootReducer = combineReducers({
    item:item_reducer
})


export const store = createStore(rootReducer, enhancer);