import 'whatwg-fetch';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { IndexRedirect, Link, Route, Router, hashHistory } from 'react-router';

//import reducer from './reducers/reducer.js';
import store from './store/index';
import App from './containers/App';
/* common style */
import '../css/common.scss';

//let store = createStore(reducer);

let rootElement = document.getElementById('root');

/*
 * router设计
 * 整体分为两个页面（也就是两个入口文件）
 * 1.登陆页  2.业务页
 * ##业务页
 * App.js (/, 顶部banner&页面切换选项)
 *  WorkPageFirst.js (/workPageFirst, container1)
 *	WorkPageSecond.js (/workPageSecond, container2)
 *	...
 */

ReactDOM.render(

	<Provider store={store}>
	    
		<Router history={hashHistory} component={App}>

	        <Route path="/" component={App}>

	        	<IndexRedirect to="/first" />

	        	<Route path="/first" 
		        	getComponent={(location, callback)=>{

		        		require.ensure([], function (require) {
	                        callback(null, require('./containers/WorkPageFirst'))
	                    }, 'first')

		        	}}></Route>

	        	<Route path="/second" 
		        	getComponent={(location, callback)=>{

		        		require.ensure([], function (require) {
	                        callback(null, require('./containers/WorkPageSecond'))
	                    }, 'second')

		        	}}></Route>

	        </Route>
	        
	    </Router>

	</Provider>,

	rootElement

)
