import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile.js';

const navLinks = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Education',
  'Certifications',
  'Contact',
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <a className="nav-logo" href="#home" onClick={closeMenu}>
        <span className="logo-mark">{profile.initials}</span>
        <span className="logo-text">
          <strong>{profile.name}</strong>
          <small>Portfolio</small>
        </span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`nav-links ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a
            className={link === 'Contact' ? 'nav-contact' : ''}
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={closeMenu}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
