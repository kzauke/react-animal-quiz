import React from 'react';

export const Button = (props) => {
	return (
		<div>
			{ props.showButton ? <button className="btn btn-primary mt-4">Next &raquo;</button> : <p></p> }
		</div>
	)
}