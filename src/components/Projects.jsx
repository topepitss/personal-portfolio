import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, GitBranch, Sparkles } from 'lucide-react';
import { projects } from '../data/projects.js';

function ProjectCard({ project }) {
  const gallery = project.gallery?.length ? project.gallery : [project.image];
  const [activeImage, setActiveImage] = useState(0);

  const showPrevious = () => {
    setActiveImage((current) => (current === 0 ? gallery.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveImage((current) => (current === gallery.length - 1 ? 0 : current + 1));
  };

  return (
    <article className="project-card project-card-featured">
      <div className="project-body">
        <div>
          <div className="project-kicker">
            <Sparkles size={16} />
            {project.label || 'Project'}
          </div>
          {project.status && <span className="project-status">{project.status}</span>}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="badge-list">
            {project.techStack.map((tech) => (
              <span className="badge badge-small" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-actions">
          <a className="link-button" href={project.githubUrl} target="_blank" rel="noreferrer">
            <GitBranch size={17} />
            GitHub
          </a>
          <a className="link-button" href={project.liveUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={17} />
            Live Demo
          </a>
        </div>
      </div>

      <div className="project-gallery">
        <div className="project-image">
          <img
            src={gallery[activeImage]}
            alt={`${project.title} screenshot ${activeImage + 1}`}
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <span>{project.title}</span>

          {gallery.length > 1 && (
            <>
              <button
                className="gallery-button gallery-button-left"
                type="button"
                aria-label="Previous project screenshot"
                onClick={showPrevious}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="gallery-button gallery-button-right"
                type="button"
                aria-label="Next project screenshot"
                onClick={showNext}
              >
                <ChevronRight size={18} />
              </button>
              <div className="gallery-count">
                {activeImage + 1}/{gallery.length}
              </div>
            </>
          )}
        </div>

        {gallery.length > 1 && (
          <div className="gallery-thumbnails" aria-label={`${project.title} screenshot gallery`}>
            {gallery.map((image, index) => (
              <button
                className={`gallery-thumbnail ${activeImage === index ? 'is-active' : ''}`}
                type="button"
                key={image}
                aria-label={`Show screenshot ${index + 1}`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt=""
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work built around real workflows and useful systems.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
