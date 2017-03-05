/**
 * action 一般分为两类
 * -----------------------
 *  1.操作保存业务数据的action
 *	2.操作管理显示状态的action
 * -----------------------
 * demo-string (应用场景：topBanner的显示文字)
 * demo-obj (应用场景：管理个人详细信息)
 * demo-array (应用场景：管理列表页)
 */

// demo-action类型 reduers中需要引入
export const INITSRTING = 'INITSRTING';
export const SETSREING = 'SETSREING';

export const INITOBJ = 'INITOBJ';
export const SETOBJ = 'SETOBJ';

export const INITARRAY = 'INITARRAY';
export const SETARRAY = 'SETARRAY';

//所有异步action类型命名规则： `FETCH_${param}_DATA_SUCCESS`
//----------------------：  `FETCH_${param}_DATA_ERROR`
export const FETCH_DEMO_DATA_SUCCESS = 'FETCH_DEMO_DATA_SUCCESS';
export const FETCH_DEMO_DATA_ERROR = 'FETCH_DEMO_DATA_ERROR';

// demo-action 创建函数 containers中需要引入
export function initStringFun () {

	return { type: INITSRTING }

}

export function setStringFun (newString) {

	return { type: SETSREING, newString }

}

export function initObjFun () {

	return { type: INITOBJ }

}

export function setObjFun (newObj) {

	return { type: SETOBJ, newObj }

}

export function initArray () {

	return { type: INITARRAY }

}

export function setArray (newArray) {

	return { type: SETARRAY, newArray }

}

/*
 * 异步action：
 * --------------------------------------
 *	说明：   将异步fetch数据操作在action内完成。
 *          fetch请求由container中移到action中。
 * --------------------------------------
 *  应用场景：对于一些回调函数中逻辑简单的请求，
 *			或者许多container中共用的请求可以写成异步action的形式。
 *  
 */

export function fetchDemoData (url, params) {

	return (dispatch, getState) => {

		// fetch(url, params)
		// .then((response) => response.json())
  //       .then((data) => {
             
  //           if (data.ret_code === 0) {

  //           	dispatch({

  //           		type: 'FETCHDATA',
  //           		payload: ret_code.ret_result

  //           	})

  //           }

  //       })

		//模拟异步请求部分
        setTimeout(() => {

        	//简单的分桶
        	let bucket = Math.floor(Math.random()*10+1)%2;

        	if (bucket) {

        		dispatch({

	        		type: 'FETCH_DEMO_DATA_SUCCESS',
	        		payload: { name:1 }

	        	})

        	} else {

        		dispatch({

	        		type: 'FETCH_DEMO_DATA_ERROR',
	        		error: { error_msg: '请求错误' }

	        	})

        	}

        }, 1000)

	}

}



