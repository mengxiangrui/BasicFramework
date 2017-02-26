import { Component, PropTypes } from 'react';
import './index.scss';

export default class Demo extends Component {

	constructor(props) {

	    super(props)
	
	}

	render() {

		const { stringData } = this.props;

		return (

			<section className='demo_style'>

				<div>hello world im demo component</div>
				<div>this is i receive from parents</div>
				<div>{ stringData }</div>

			</section>

		)

	}

}