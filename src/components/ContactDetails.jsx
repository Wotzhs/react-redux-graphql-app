import React from 'react';

class ContactDetails extends React.Component{
	render(){
		return(
			<div>
				<div>
					<label>Avatar</label>
					<p>This is the Contact Avatar</p>
				</div>
				<div>
					<label>Name</label>
					<p>This is the Contact Name</p>
				</div>
				<div>
					<label>Phone</label>
					<p>This is the Contact Phone</p>
				</div>
				<div>
					<label>Email</label>
					<p>This is the Contact Email</p>
				</div>
				<div>
					<label>Organization</label>
					<p>This is the Contact Organzation</p>
				</div>
				<div>
					<label>Comment</label>
					<p>This is the Contact Comment</p>
				</div>
			</div>
		)
	}
}

export default ContactDetails;