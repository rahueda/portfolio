import React from 'react';

import './Contact.css';

const contact = (props) => (
	<div className="logos">
		<a href={props.link}>
			<img src={props.linkLogo} alt="logo"></img>
		</a>
	</div>
);

export default contact;
