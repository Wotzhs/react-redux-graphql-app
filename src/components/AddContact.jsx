import React from 'react';

class AddContact extends React.Component{

	createContact(event){
		event.preventDefault();
	}

	render(){
		return(
			<form onSubmit={this.createContact}>
				<input type="text" placeholder="Name"/>
				<input type="text" placeholder="Phone"/>
				<input type="email" placeholder="Email"/>
				<input type="text" placeholder="Organization"/>
				<textarea cols="30" rows="10" placeholder="comments"></textarea>
				<input type="submit" value="Save"/>
				<input type="button" value="Cancel"/>
			</form>
		)
	}
}

export default AddContact;