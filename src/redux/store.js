import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./reducer/index";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const composeEnhancers = compose;



const rootReducer = combineReducers({
	...rootReducers,
	router: routerReducer,
});
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares)),
);

export { store };