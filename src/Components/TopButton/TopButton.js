import React, { useState } from 'react';
import HomeButton from '../../assets/home.svg';
import './TopButton.css';

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 600) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 600) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	window.addEventListener('scroll', checkScrollTop);

	return (
		<button
			className="scrollTop"
			onClick={scrollTop}
			style={{ display: showScroll ? 'flex' : 'none' }}
		>
			<img src={HomeButton} alt="Home" />
		</button>
	);
};

export default ScrollArrow;
