import React from 'react';

export const Image = (props) => {
	return (
      <div id="image-container">
        <img src={props.src} alt="something" />
      </div>
    )
}