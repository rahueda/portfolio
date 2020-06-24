import React from 'react';

import Button from './ButtonLinks/ButtonLinks';
import './ContainerLinks.css';

const buttons = () => (
	<div className="buttons">
		<Button container="#about">ABOUT</Button>
		<Button container="#skills">SKILLS</Button>
		<Button container="#projects">PROJECTS</Button>
		<Button container="#contacts">CONTACT</Button>
	</div>
);

export default buttons;
