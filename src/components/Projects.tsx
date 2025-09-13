import React from 'react';
import type { Project } from '../types';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

export const Projects = (props: ProjectsProps) => {
  const { projects } = props;
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-details">
                  <p className="project-role"><strong>Role:</strong> {project.role}</p>
                  <div className="project-stack">
                    <strong>Stack:</strong>
                    <div className="stack-tags">
                      {project.stack.map((tech, index) => (
                        <span key={index} className="stack-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-outcomes">
                    <strong>Key Outcomes:</strong>
                    <ul>
                      {project.outcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="project-links">
                  {project.companyUrl && (
                    <a href={project.companyUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                      Company Site
                    </a>
                  )}
                  {/* {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="project-link source">
                      Source Code
                    </a>
                  )} */}
                  {project.caseStudyUrl && (
                    <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="project-link case-study">
                      Case Study
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
