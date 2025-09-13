import React from 'react';
import './Header.css';

interface HeaderProps {
  name: string;
  role: string;
  location: string;
  valueStatement: string;
  email: string;
  resumeUrl: string;
}

export const Header = (props: HeaderProps) => {
  const { 
    name, 
    role, 
    location, 
    valueStatement, 
    email, 
    resumeUrl 
  } = props;
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">{name}</h1>
        <h2 className="role">{role}</h2>
        <p className="location">{location}</p>
        <p className="value-statement">{valueStatement}</p>
        <div className="header-actions">
          <a href={`mailto:${email}`} className="contact-btn">
            Contact Me
          </a>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-btn">
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};
