import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setStringFun, fetchDemoData } from '../actions/index';

import Demo from '../components/Demo/index';

class WorkPageFirst extends Component {

	constructor(props) {

	    super(props)
	
	}

	render() {

		const { dispatch, stringData, listData } = this.props;

		return (

			<section>

				{ 'im WorkPageFirst' }
				<Demo 
					stringData = {stringData}
					listData = {listData}
					clickHandlerNormal = { () => {dispatch(setStringFun('hi im new string'))} }
					clickHandlerAsynAction = { () => {dispatch(fetchDemoData('',{}))} }/>

			</section>

		)

	}	

}


function appStore(state) {

	return {

		stringData: state.stringFun,
		listData: state.listData

	}

}

export default connect(appStore)(WorkPageFirst)