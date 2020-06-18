import React from 'react';

import Contact from './Contact/Contact';
import './Contacts.css';

import FacebookLogo from './../../assets/logo/contacts/facebook.png';
import GitHubLogo from './../../assets/logo/contacts/github.png';
import LinkedinLogo from './../../assets/logo/contacts/linkedin.png';
import EmailLogo from './../../assets/logo/contacts/email.png';

const contacts = () => (
	<div className="contacts">
		<Contact
			link="https://pt-br.facebook.com/people/Rafael-Ueda/100008761566787"
			linkLogo={FacebookLogo}
		/>
		<Contact link="https://github.com/rahueda" linkLogo={GitHubLogo} />
		<Contact
			link="https://linkedin.com/in/rafael-ueda-37b8471a1/"
			linkLogo={LinkedinLogo}
		/>
		<Contact link="mailto:rahueda@hotmail.com" linkLogo={EmailLogo} />
	</div>
);

export default contacts;
