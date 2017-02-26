import { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './index.scss';

export default class DemoTabBars extends Component {

	constructor(props) {

	    super(props)
	
	}

	render() {

		const { tabBarLinks } = this.props;

		return (

			<section className='tabbar_style'>

				{ 

					tabBarLinks.map((item) => {

						return <Link to={item} className='tabber' >{item}</Link>

					})

				}

			</section>

		)

	}

}