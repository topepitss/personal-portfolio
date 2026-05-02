import { profile } from '../data/profile.js';

function Footer() {
  return (
    <footer className="footer">
      <p>(c) {new Date().getFullYear()} {profile.name}. Built with React and Vite.</p>
    </footer>
  );
}

export default Footer;
