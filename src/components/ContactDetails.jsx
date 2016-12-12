import React from 'react';
import { Icon } from 'react-fa';

const styles = {
	editButton: {
		width: '49%',
		marginRight: '1%'
	},
	deleteButton: {
		width: '49%',
		marginRight: '1%',
		color: 'red'
	},
	minHeight240px: {
		minHeight: 240
	},
	show: {
		display: 'block',
		border: '1px solid black',
		padding: '25px 15px 15px 15px',
		backgroundColor: 'white',
		minHeight: 380,
		zIndex: 2
	},
	hide: {
		display: 'none'
	},
	selectable: {
		cursor: 'pointer'
	}
}

class ContactDetails extends React.Component{

	constructor() {
		super();
		this.state = {
			
		}
	}

	back() {
		this.props.toggleContactBrowserDisplay();
		this.props.toggleContactDetailsDisplay();
	}

	render(){
		return(
			<div style={ this.props.display ? styles.show : styles.hide } >
				<div className="row">
					<h3>
						<Icon name="mail-reply" onClick={ (e) => this.back(e) } style={ styles.selectable }/>
						&ensp;Wong Tze Hsiung
					</h3>	
				</div>
				
				<div className="row" style={ styles.minHeight240px }>
					<div className="four columns">
						<img src="/default_avatar.jpg" alt="" className="u-max-full-width"/>
					</div>
					<div className="eight columns">
						<div className="row">
							<div className="six columns">
								<label>Phone</label>
								<p>016-9983022</p>
							</div>
							<div className="six columns">
								<label>Email</label>
								<a href="mailto:wotzhs@gmail.com" target="_top">wotzhs@gmail.com</a>
							</div>
						</div>
						
						<label>Organization</label>
						<p>Pixl8 Interactive</p>
						<label>Comment</label>
						<p></p>
					</div>
				</div>
				<br/>
				<div className="row">
					<button className="button" style={ styles.editButton }><Icon name="pencil"/> Edit</button>
					<button className="button" style={ styles.deleteButton }><Icon name="trash"/> Delete</button>
				</div>
				
			</div>
		)
	}
}

export default ContactDetails;