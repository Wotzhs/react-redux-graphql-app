import React from 'react';
import { Icon } from 'react-fa';

const styles = {
	justified: {
		textAlign: 'justify'
	},
	centered:{
		textAlign: 'center'
	},
	blockHeight: {
		paddingTop: '15vh',
		backgroundColor: 'white',
		marginLeft: -25,
		marginRight: -25,
		paddingLeft: 25,
		paddingRight: 25
	}
}

class LandingPageWhy extends React.Component{
	render(){
		return(
			<div style={ styles.blockHeight }>
				<h1>Why Disconeq</h1>
				<br/><br/>
				<div className="row">
					<div className="one column">&ensp;</div>
					<div className="ten columns">
						<div className="one-third column" style={ styles.justified } >
							<h1><Icon name="floppy-o" size="3x" /></h1>
							<h5>Saved Forever</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum iste impedit labore eum perferendis, maxime id architecto numquam voluptate earum, ullam unde dolor aliquid non ea laborum sapiente, deleniti eaque!</p>
						</div>
						<div className="one-third column" style={ styles.justified } >
							<h1><Icon name="check-square-o" size="3x" /></h1>
							<h5>Better Organization</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum fugit ratione temporibus sit sapiente voluptas, quod esse officiis unde reiciendis nesciunt ipsa, nobis ipsam nemo aspernatur cumque natus voluptatibus at.</p>
						</div>
						<div className="one-third column" style={ styles.justified } >
							<h1><Icon name="exchange" size="3x" /></h1>
							<h5>Seamless Integration</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque provident harum officiis eos sapiente culpa cumque vitae cum sequi fugiat eaque excepturi, voluptatum laboriosam, at ullam nam sit, earum deleniti.</p>
						</div>
					</div>
					<div className="one column"></div>
				</div>
			</div>
		)
	}
}

export default LandingPageWhy;