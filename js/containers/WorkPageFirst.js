import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Demo from '../components/Demo/index';

class WorkPageFirst extends Component {

	constructor(props) {

	    super(props)
	
	}

	render() {

		const { dispatch, stringData } = this.props;

		return (

			<section>

				{ 'im WorkPageFirst' }
				<Demo 
					stringData = {stringData}/>

			</section>

		)

	}	

}


function appStore(state) {

	return {

		stringData: state.stringFun

	}

}

export default connect(appStore)(WorkPageFirst)