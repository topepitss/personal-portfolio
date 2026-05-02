import { experiences } from '../data/experience.js';

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Hands-on training and support experience.</h2>
      </div>

      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline-item" key={`${item.role}-${item.company}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div>
              <div className="timeline-header">
                <h3>{item.role}</h3>
                {item.date && <span>{item.date}</span>}
              </div>
              <p className="company">{item.company}</p>
              {Array.isArray(item.description) ? (
                <ul className="timeline-list">
                  {item.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.description}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
