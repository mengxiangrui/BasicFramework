import { Component, PropTypes } from 'react';
import './index.scss';
/*
 *	实验setState
 */
export default class Demo extends Component {

	constructor(props) {

	    super(props)
	
	}

	render() {

		const { stringData, 
				listData, 
				clickHandlerNormal, 
				clickHandlerAsynAction } = this.props;

		return (

			<section className='demo_style'>

				<h3>触发普通action</h3>
				<div onClick={ clickHandlerNormal }>点击我更改文字</div>
				<div>{ stringData }</div>
				<br/>
				<h3>触发异步action</h3>
				<div onClick={ clickHandlerAsynAction }>点击我进行异步action请求</div>
				<div> { !listData.error_msg ? '请求成功，控制台查看具体信息' : listData.error_msg } </div>

			</section>

		)

	}

}