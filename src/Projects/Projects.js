import React from 'react';

import './Projects.css';

const projects = () => {
	const projectsLink = [
		{
			name: 'My Library',
			link: 'https://github.com/rahueda/my-library',
			id: 1,
		},
		{
			name: 'Pomodoro',
			link: 'https://github.com/rahueda/pomodoro',
			id: 2,
		},
		{
			name: 'Calculator',
			link: 'https://github.com/rahueda/calculator',
			id: 3,
		},
		{
			name: 'Jokenpo',
			link: 'https://github.com/rahueda/jokenpo',
			id: 4,
		},
	];

	const projectMap = projectsLink.map((project) => {
		return <div>{project.name}</div>;
	});

	return (
		<div className="containerProjects">
			<section>
				<h1>Projetos</h1>
				<p>{projectMap}</p>
			</section>
		</div>
	);
};

export default projects;