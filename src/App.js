import React from 'react';

import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contacts from './Contacts/Contacts';
import ScrollArrow from './Components/TopButton/TopButton';

function App() {
	return (
		<div className="App">
			<header>
				<ScrollArrow />
			</header>
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contacts />
		</div>
	);
}

export default App;
