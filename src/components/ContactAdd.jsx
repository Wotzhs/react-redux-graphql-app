import React from 'react';
import { Icon } from 'react-fa';

const styles = {
	minHeight100px: {
		minHeight: 100
	},
	clickableAvatar: {
		height: 195,
		cursor: 'pointer'
	},
	centered: {
		textAlign: 'center',
	},
	saveButton: {
		width: '49%',
		marginRight: '1%'
	},
	cancelButton: {
		width: '49%',
		marginRight: '1%',
		color: 'red'
	},
	show: {
		display: 'block',
		border: '1px solid black',
		padding: '25px 15px 15px 15px',
		backgroundColor: 'white',
		minHeight: 380
	},
	hide: {
		display: 'none'
	} 
}

class ContactAdd extends React.Component{

	createContact(event){
		event.preventDefault();
		const contact = {
			name: this.name.value,
			phone: this.phone.value,
			email: this.email.value,
			organization: this.organization.value,
			comments: this.comments.value
		}
		this.props.addContact(contact);
		this.contactForm.reset();

	}

	toggle(){
		this.props.toggleDisplay();
	}	


	render(){
		return(
			<div style={ this.props.display ? styles.show : styles.hide }>
				<h3>Add Contact</h3>

				<form ref={ (input) => this.contactForm = input } onSubmit={ (e) => this.createContact(e) } >
					<div className="row">
						<div className="four columns" style={ styles.centered } >
							<img 
								className="u-max-full-width" 
								src="/default_avatar.jpg" 
								alt="default avatar" 
								style={ styles.clickableAvatar } 
							/>
						</div>
						<div className="eight columns">
							<input ref={ (input) => this.name = input } className="u-full-width" type="text" placeholder="Name"/>
							<input ref={ (input) => this.phone = input } className="u-full-width" type="text" placeholder="Phone"/>
							<input ref={ (input) => this.email = input } className="u-full-width" type="email" placeholder="Email"/>
							<input ref={ (input) => this.organization = input } className="u-full-width" type="text" placeholder="Organization"/>
						</div>
						
					</div>

					<div className="row">
						<textarea 
							ref={ (input) => this.comments = input }
							className="u-full-width" 
							placeholder="comments" 
							style={ styles.minHeight100px }>
						</textarea>
					</div>
					
					<div className="row">
		
							<button className="u-full-width" style={ styles.saveButton }>
								<Icon name="floppy-o" /> Save
							</button>


							<button className="u-full-width" type="button" style={ styles.cancelButton } onClick={ (e)=> this.toggle(e) }>
								<Icon name="trash-o" /> Cancel
							</button>

					</div>				
				</form>
			</div>
			
		)
	}
}

export default ContactAdd;