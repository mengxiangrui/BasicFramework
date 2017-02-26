import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class WorkPageSecond extends Component {

	constructor(props) {

	    super(props)
	
	}

	render() {

		const { dispatch ,newsDetail } = this.props;

		return (

			<section>

				{ 'im WorkPageSecond' }

			</section>

		)

	}	

}

function appStore(state) {

	return {

		newsDetail: state.newsDetail

	}

}

export default connect(appStore)(WorkPageSecond)