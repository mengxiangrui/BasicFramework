import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { initStringFun, setStringFun } from '../actions/index';

import DemoTabBars from '../components_common/DemoTabBars/index';

class App extends Component {

	constructor(props) {

	    super(props)
	
	}

	render() {

		const { dispatch, stringFun } = this.props;
		//此处headerBanner包括tabBars，建议自行封装组建。
		const tabBarLinks = ['/first', '/second'];

		return (

			<section>

				<DemoTabBars
					tabBarLinks = {tabBarLinks} />

				{ this.props.children }

			</section>

		)

	}	

}


function appStore(state) {

	return {

		stringFun: state.stringFun

	}

}

export default connect(appStore)(App)