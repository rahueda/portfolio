import React from 'react';

import './Home.css';
import eu from './../assets/images/eu.jpg';
import Buttons from './Buttons/Buttons';
import Contacts from './Contacts/Contacts';

const home = () => (
	<div className="containerHome">
		<figure className="imgCut">{<img src={eu} alt="eu" />}</figure>
		<Buttons />
		<section className="nameSection">
			<p className="name">Rafael Ueda</p>
			<hr />
			<p>Deselvolvedor Web</p>
			<p>Front-End</p>
		</section>
		<Contacts />
	</div>
);

export default home;
