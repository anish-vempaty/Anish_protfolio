import React from 'react';
import photo from '../assets/images/Photo.jpg';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src= {photo} alt="Anish" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Anish Vempaty">Anish Vempaty</h1>
          <p className="title">Cybersecurity Engineer</p>
          <p className="tagline">M.S. Cybersecurity, NYU</p>
          <p className="status">🚀 Open to Work</p>
        </div>
        <div className="sidebar-resume">
          <a href="allmix_anish.pdf" download className="resume-btn">
            Download CV
          </a>
        </div>
      </div>
      {/* Add contact/social info here */}
    </aside>
  );
}
