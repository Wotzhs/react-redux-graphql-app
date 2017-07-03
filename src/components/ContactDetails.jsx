import React from 'react';
import { Icon } from 'react-fa';

const styles = {
	editButton: {
		paddingLeft: '3%',
		paddingRight: '3%',
		width: '50%'
	},
	deleteButton: {
		paddingLeft: '3%',
		paddingRight: '3%',
		width: '50%',
		color: 'red'
	},
	minHeight240px: {
		minHeight: 240
	},
	show: {
		padding: '0 15px 15px 15px',
		backgroundColor: 'white',
		minHeight: 380,
		zIndex: 2
	},
	showChild:{
		display: 'block'
	},
	hide: {
		display: 'none'
	},
	selectable: {
		cursor: 'pointer',
		color: '#1EAEDB'
	}
}

class ContactDetails extends React.Component{

	constructor() {
		super();
		this.state = {
			contact: {}
		}
	}

	componentWillReceiveProps( nextProps ) {
		this.setState({ contact: {...nextProps.contactDetails} })
	}

	handleClick(event) {
		const currentButtonState = event.target.textContent.trim();
		if (currentButtonState === "Edit") { this.setState({ isEdit: true }) }
		if (currentButtonState === "Save") { 
			this.props.updateContact(this.state.contact);
			this.setState({ isEdit: false });
			this.props.loadContactDetails(this.state.contact);
		}
	}
	handleChange(e) {
		const updatedContact = {
			...this.state.contact,
			[e.target.name]: e.target.value
		}
		this.setState({ contact: updatedContact})
	}

	return() {
		this.props.clearContactDetails();
		this.props.setContactBrowserDisplay(true);
	}

	render(){
		return(
			<div style={ Object.keys(this.props.contactDetails).length ? styles.show : styles.hide } >
				<div style={ this.state.isEdit ? styles.hide : styles.showChild }>
					<div className="row">
						<h5>
							<Icon name="mail-reply" onClick={ (e) => this.return(e) } style={ styles.selectable }/>
							&ensp;{ this.props.contactDetails.name }
						</h5>	
					</div>
					
					<div className="row" style={ styles.minHeight240px }>
						<div className="eight columns">
							<div className="row">
								<div className="six columns">
									<label>Phone</label>
									<p>{ this.props.contactDetails.tel }</p>
								</div>
								<div className="six columns">
									<label>Email</label>
									<a href="mailto:wotzhs@gmail.com" target="_top">{ this.props.contactDetails.email }</a>
								</div>
							</div>
							
							<label>Organization</label>
							<p>{ this.props.contactDetails.organisation }</p>
							<label>Comment</label>
							<p>{ this.props.contactDetails.comment }</p>
						</div>
					</div>
				</div>

				<div style={ this.state.isEdit ? styles.showChild : styles.hide }>
					<h5>Edit Contact</h5>
					<div className="row">
						<div className="three columns">
							<label>Name</label>
						</div>
						<div className="nine columns">
							<input 
								type="text" 
								name="name"
								className="u-full-width" 
								value={ this.state.contact.name || ''}
								onChange={ (e) => this.handleChange(e) }
							/>
						</div>
						
					</div>
					
						
				</div>
				
				<br/>
				<div className="row">
					<button 
						className="button" 
						style={ styles.editButton }
						onClick={(e)=> this.handleClick(e) }
					>
						<Icon name="pencil"/> { this.state.isEdit ? 'Save' : 'Edit' }
					</button>
					<button className="button" style={ styles.deleteButton }><Icon name="trash"/> Delete</button>
				</div>
			</div>
			
		)
	}
}

export default ContactDetails;