import React, { Component } from 'react';

export class Button extends Component {
	constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
	handleClick(e) {
		this.props.goToNext(e);
	}

	render() {
		return (
			<div>
				{ this.props.showButton ? <button className="btn btn-primary mt-4" onClick={this.handleClick}>Next &raquo;</button> : <p></p> }
			</div>
		)
	}
}