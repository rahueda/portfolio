import React from 'react';

import Button from './Button/Button';
import QuemSouEu from '../../QuemSouEu/QuemSouEu';
import Projects from '../../Projects/Projects';
import Certificates from '../../Certificates/Certificates';
import './Buttons.css';

const buttons = () => (
	<div className="buttons">
		<Button container={QuemSouEu}>QUEM SOU EU</Button>
		<Button container={Projects}>PROJETOS</Button>
		<Button container={Certificates}>FERRAMENTAS</Button>
	</div>
);

export default buttons;
