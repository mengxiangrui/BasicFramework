/**
 * action 一般分为两类
 *  1.操作保存业务数据的数据
 *	2.操作管理显示状态的数据
 */

/*
 * demo-string (应用场景：topBanner的显示文字)
 * demo-obj (应用场景：管理个人详细信息)
 * demo-array (应用场景：管理列表页)
 */

/*
 * demo-action类型 reduers中需要引入
 */
export const INITSRTING = 'INITSRTING';
export const SETSREING = 'SETSREING';

export const INITOBJ = 'INITOBJ';
export const SETOBJ = 'SETOBJ';

export const INITARRAY = 'INITARRAY';
export const SETARRAY = 'SETARRAY';

/*
 * demo-action 创建函数 containers中需要引入
 */

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



