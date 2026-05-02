import { CheckCircle2 } from 'lucide-react';
import { highlights, profile } from '../data/profile.js';

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>{profile.aboutHeading}</h2>
      </div>
      <div className="about-layout">
        <div className="content-panel about-copy">
          <p>{profile.about}</p>
        </div>

        <div className="highlight-panel">
          {highlights.map((highlight) => (
            <div className="highlight-item" key={highlight}>
              <CheckCircle2 size={18} />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
