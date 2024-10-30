import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import todoReducer from './todoReducer';
import todoSaga from './todoSaga';

// import todoReducer from './reducers/todoReducer';
// import todoSaga from './sagas/todoSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoSaga);

export default store;
