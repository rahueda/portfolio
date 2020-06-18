import React from 'react';

import Home from './Home/Home';
import QuemSouEu from './QuemSouEu/QuemSouEu';
import Projects from './Projects/Projects';
import Certificates from './Certificates/Certificates';

function App() {
	return (
		<div className="App">
			<Home />
			<QuemSouEu />
			<Projects />
			<Certificates />
		</div>
	);
}

export default App;
