import React from 'react';

import './ButtonLinks.css';

const button = (props) => (
	<div>
		<a href={props.container}>
			<button className="buttonLink">{props.children}</button>
		</a>
	</div>
);

export default button;
