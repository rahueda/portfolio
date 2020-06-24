import React from 'react';

import './Projects.css';
import calculatorImg from './../assets/images/calculator.png';
import mylibraryImg from './../assets/images/mylibrary.png';
import pomodoroImg from './../assets/images/pomodoro.png';
import jokenpoImg from './../assets/images/jokenpo.png';

const projects = () => {
	const projectsLink = [
		{
			name: 'My Library',
			link: 'https://github.com/rahueda/my-library',
			img: mylibraryImg,
			id: 4,
		},
		{
			name: 'Pomodoro',
			link: 'https://github.com/rahueda/pomodoro',
			img: pomodoroImg,
			id: 3,
		},
		{
			name: 'Calculator',
			link: 'https://github.com/rahueda/calculator',
			img: calculatorImg,
			id: 2,
		},
		{
			name: 'Jokenpo',
			link: 'https://github.com/rahueda/jokenpo',
			img: jokenpoImg,
			id: 1,
		},
	];

	const projectMap = projectsLink.map((project, id) => {
		return (
			<div className="card" key={id}>
				<span>{project.name}</span>
				<a href={project.link} target="_blank" rel="noopener noreferrer">
					<img src={project.img} alt={project.name} />
				</a>
			</div>
		);
	});

	return (
		<div id="projects" className="containerProjects">
			<h1>PROJECTS</h1>
			<section className="cards">{projectMap}</section>
		</div>
	);
};

export default projects;
