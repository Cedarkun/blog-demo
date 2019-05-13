import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import  helloSaga  from './sagas'

const win = window;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

let storeEnhancers = compose(
    applyMiddleware(...middlewares,sagaMiddleware),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default function configureStore(initialState={}) {
    const store = createStore(rootReducer, initialState,storeEnhancers);
    sagaMiddleware.run(helloSaga);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept( './reducers',() => {
            const nextRootReducer = require('./reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
