import { combineReducers } from 'redux';
import { INITSRTING,
		SETSREING, 
		INITOBJ, 
		SETOBJ, 
		INITARRA, 
		SETARRAY,
		FETCH_DEMO_DATA_SUCCESS,
		FETCH_DEMO_DATA_ERROR } from '../actions/index';

let initStateData = {

	string: '我是初始string',
	obj: {},
	array: [],
	initList: []

}

/**
 * 不可变数据结构，状态不要再原值上做修改，返回一个新对象或者数组。
 * ^return| String/Number   |      Object           |   Arrary
 * init   | 纯字符串/数字操作 	| {}                    | []
 * add    | 纯字符串/数字操作	| Object.assign({}, ...)| [...state, ...action.newArray]
 * delete | 纯字符串/数字操作	| Object.assign         | [...state.slice(0, action.index), ...state.slice(++action.index) ]
 * change | 纯字符串/数字操作	| Object.assign         | [...state.slice(0, action.index), newArray, ...state.slice(++action.index) ]
 */

function stringFun ( state = initStateData.string, action ) {

	switch (action.type) {

		case INITSRTING:

			return ''

		case SETSREING:

			return action.newString

		default:

      		return state	

	}

}

function listData (state = initStateData.initList, action) {

	switch (action.type) {

		case FETCH_DEMO_DATA_SUCCESS:

			return [...state, action.payload]

		case FETCH_DEMO_DATA_ERROR:

			return action.error

		default:

      		return state

	}

}

const newsApp = combineReducers({
  	stringFun: stringFun,
  	listData: listData
})

export default newsApp