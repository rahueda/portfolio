import React from 'react';

import './Button.css';

const button = (props) => (
	<div>
		<button /* onClick={props.container} */ className="buttonLink">
			{props.children}
		</button>
	</div>
);

export default button;
