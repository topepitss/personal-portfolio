import { GraduationCap } from 'lucide-react';
import { education } from '../data/profile.js';

function Education() {
  return (
    <section className="section" id="education">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>{education.heading}</h2>
      </div>

      <article className="education-card">
        <GraduationCap size={28} />
        <div>
          <h3>{education.degree}</h3>
          <p className="company">
            {education.school} | {education.date}
          </p>
          <p>{education.description}</p>
        </div>
      </article>
    </section>
  );
}

export default Education;
