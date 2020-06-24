import React from 'react';

import './Home.css';
import eu from './../assets/images/eu.jpg';
import Buttons from './ContainerLinks/ContainerLinks';

const home = () => (
	<div id="home" className="containerHome">
		<figure className="imgCut">{<img src={eu} alt="eu" />}</figure>
		<Buttons />
		<section className="nameSection">
			<p className="name">RAFAEL UEDA</p>
			<hr />
			<p>Deselvolvedor Web</p>
			<p>Front-End</p>
		</section>
	</div>
);

export default home;
