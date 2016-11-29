import React from 'react';

const styles = {
	centered: {
		textAlign: 'justify'
	},
	blockHeight: {
		paddingTop: '15vh',
		height: '80vh'
	}
}

class LandingPageWhy extends React.Component{
	render(){
		return(
			<div style={ styles.blockHeight }>
				<h1>Why Disconeq</h1>
				<br/>
				<div className="row">
					<div className="one column">&ensp;</div>
					<div className="ten columns">
						<div className="one-third column" style={ styles.centered } >
							<h4>Saved Forever</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum iste impedit labore eum perferendis, maxime id architecto numquam voluptate earum, ullam unde dolor aliquid non ea laborum sapiente, deleniti eaque!</p>
						</div>
						<div className="one-third column" style={ styles.centered } >
							<h4>Better Organization</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum fugit ratione temporibus sit sapiente voluptas, quod esse officiis unde reiciendis nesciunt ipsa, nobis ipsam nemo aspernatur cumque natus voluptatibus at.</p>
						</div>
						<div className="one-third column" style={ styles.centered } >
							<h4>Seamless Integration</h4>
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