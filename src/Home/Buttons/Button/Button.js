import React from 'react';

import './Button.css';

const button = (props) => (
	<div>
		<a href={props.container}>
			<button className="buttonLink">{props.children}</button>
		</a>
	</div>
);

export default button;
