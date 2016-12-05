import React from 'react';

const styles = {
	default: {
		paddingTop: 25
	},
	minHeight100px: {
		minHeight: 100
	},
	clickableAvatar: {
		height: 195,
		cursor: 'pointer'
	},
	centered: {
		textAlign: 'center',
	}
}

class AddContact extends React.Component{

	createContact(event){
		event.preventDefault();
	}

	render(){
		return(
			<form onSubmit={ this.createContact } style={ styles.default } >
				<div className="row">
					<div className="two columns">&ensp;</div>
					<div className="two columns" style={ styles.centered } >
						<img 
							className="u-max-full-width" 
							src="/default_avatar.jpg" 
							alt="default avatar" 
							style={ styles.clickableAvatar } 
						/>
					</div>
					<div className="six columns">
						<input className="u-full-width" type="text" placeholder="Name"/>
						<input className="u-full-width" type="text" placeholder="Phone"/>
						<input className="u-full-width" type="email" placeholder="Email"/>
						<input className="u-full-width" type="text" placeholder="Organization"/>
					</div>
					
				</div>

				<div className="row">
					<div className="two columns">&ensp;</div>
					<div className="eight columns">
						<textarea 
							className="u-full-width" 
							placeholder="comments" 
							style={ styles.minHeight100px }>
						</textarea>
					</div>
					<div className="two columns"></div>
				</div>
				
				<div className="row">
					<div className="two columns">&ensp;</div>
					<div className="four columns">
						<input className="u-full-width button-primary" type="submit" value="Save"/>
					</div>
					<div className="four columns">
						<input className="u-full-width" type="button" value="Cancel"/>
					</div>
				</div>				
			</form>
		)
	}
}

export default AddContact;