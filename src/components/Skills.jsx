import { Code2, Database, Headphones, PanelsTopLeft, Sparkles, Wrench } from 'lucide-react';
import { skills } from '../data/skills.js';

const skillIcons = {
  Programming: Code2,
  'Web Development': PanelsTopLeft,
  Database: Database,
  'Tools & Platforms': Wrench,
  'IT Support': Headphones,
  'Soft Skills': Sparkles,
};

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Tools and technologies I use to build reliable solutions.</h2>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.category}>
            <div className="skill-card-header">
              <span className="skill-icon">
                {(() => {
                  const Icon = skillIcons[group.category] || Code2;
                  return <Icon size={19} />;
                })()}
              </span>
              <h3>{group.category}</h3>
            </div>
            <div className="badge-list">
              {group.items.map((skill) => (
                <span className="badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
