import React from 'react';
import { Icon } from 'react-fa';

const styles = {
	padding15px: {
		padding: 15,
		fontFamily: 'fontAwesome'
	},
	show: {
		paddingRight: 10,
		marginTop: -42,
		position: 'relative',
		cursor: 'pointer'
	},
	hide: {
		display: 'none'
	}
}

class ContactSearch extends React.Component{

	constructor(){
		super();
		this.state = {
			show: false
		}
	}

	search(event){
		this.searchInput.value.length ? this.setState({show: true}) : this.setState({show: false})
	};

	clearInput(){
		this.searchInput.value = null;
		this.setState({show:false});
	}

	render(){
		return(
			<div style={ styles.padding15px }>
				<input 
					type="text"
					placeholder="&#xf002;  Search..."
					className="u-full-width"
					onChange={ (e) => this.search(e) }
					ref={ (input) => this.searchInput = input }
				/>
				<Icon
					name="times" 
					className="u-pull-right" 
					style={ this.state.show ? styles.show : styles.hide  }
					onClick={ (e) => this.clearInput(e)}
				/>
			</div>
		)
	}
}

export default ContactSearch;