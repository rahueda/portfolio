import React from 'react';

import './Skills.css';

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => (images[item.replace('./', '')] = r(item)));
	return images;
}

const images = importAll(
	require.context('./../assets/logo/certificates/', false, /\.(png|jpe?g|svg)$/)
);

const frontend = () => {
	const frontendLogos = [
		{
			link: 'html.svg',
			alt: 'html logo',
			id: 1,
		},
		{
			link: 'css.svg',
			alt: 'css logo',
			id: 2,
		},
		{
			link: 'javascript.svg',
			alt: 'javascript logo',
			id: 3,
		},
		{
			link: 'git.svg',
			alt: 'git logo',
			id: 4,
		},
		{
			link: 'bootstrap.svg',
			alt: 'bootstrap logo',
			id: 5,
		},
		{
			link: 'react.svg',
			alt: 'react logo',
			id: 6,
		},
	];

	const frontendLogosMap = frontendLogos.map((logo) => {
		return (
			<div className="hex" key={logo.id}>
				<img src={images[logo.link]} alt={logo.alt} />
			</div>
		);
	});

	return (
		<div id="skills" className="containerSkills">
			<h1>SKILLS</h1>
			<section className="hexagon-gallery">{frontendLogosMap}</section>
		</div>
	);
};

export default frontend;
