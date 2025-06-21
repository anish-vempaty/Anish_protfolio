import React from 'react';

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {tabs.map(tab => (
          <li className="navbar-item" key={tab.id}>
            <button
              className={`navbar-link${activePage === tab.id ? ' active' : ''}`}
              onClick={() => setActivePage(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
