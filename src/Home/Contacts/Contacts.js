import React from 'react';

import Contact from './Contact/Contact';
import './Contacts.css';

import FacebookLogo from './../../assets/logo/facebook.png';
import GitHubLogo from './../../assets/logo/github.png';
import LinkedinLogo from './../../assets/logo/linkedin.png';
import EmailLogo from './../../assets/logo/email.png';

const contacts = () => (
	<div className="contacts">
		<Contact link="http://www.google.com" linkLogo={FacebookLogo} />
		<Contact link="http://www.google.com" linkLogo={GitHubLogo} />
		<Contact link="http://www.google.com" linkLogo={LinkedinLogo} />
		<Contact link="http://www.google.com" linkLogo={EmailLogo} />
	</div>
);

export default contacts;
