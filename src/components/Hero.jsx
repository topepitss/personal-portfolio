import { ArrowDownToLine, Mail, Rocket, ShieldCheck } from 'lucide-react';
import { heroStats, profile } from '../data/profile.js';

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="eyebrow">{profile.eyebrow}</p>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            <Rocket size={18} />
            View Projects
          </a>
          <a className="btn btn-secondary" href={profile.cvPath} download>
            <ArrowDownToLine size={18} />
            Download CV
          </a>
          <a className="btn btn-ghost" href="#contact">
            <Mail size={18} />
            Contact Me
          </a>
        </div>

        <div className="hero-stats" aria-label="Portfolio highlights">
          {heroStats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label="Profile preview">
        <div className="profile-stage">
          <div className="profile-ring">
            <img
              src={profile.profileImage}
              alt={profile.name}
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
            <span>{profile.initials}</span>
          </div>
          <div className="profile-badge">
            <ShieldCheck size={18} />
            <span>CV-ready portfolio</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
