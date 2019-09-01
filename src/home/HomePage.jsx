import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
export default class HomePage extends Component {

	constructor(props){
		super(props);
		console.log(localStorage.getItem("token"));
	}
	render(){
		const token = localStorage.getItem("token");
		return(
			token != null ?
			(<div>
				<p>hello home</p>
			</div>) : (<Redirect to="/login"/>)
		)
	}
}