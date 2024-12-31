import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { Project } from '../../types/project';
import ProjectGallery from './ProjectGallery';
import RohrsystemGallery from './RohrsystemGallery';
import KomplettbadGallery from './KomplettbadGallery';
import HeizungGallery from './HeizungGallery';
import BadSanierungGallery from './BadSanierungGallery';

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const getGalleryComponent = () => {
    switch (project.id) {
      case 'rohrsystem-installation':
        return <RohrsystemGallery images={project.images} />;
      case 'komplettbad-sanierung':
        return <KomplettbadGallery images={project.images} />;
      case 'heizungsinstallation':
        return <HeizungGallery images={project.images} />;
      case 'badsanierungen-vorher-und-nachher':
        return <BadSanierungGallery images={project.images} />;
      default:
        return <ProjectGallery images={project.images} />;
    }
  };

  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Projektübersicht</h2>
        <p className="text-gray-600">{project.overview}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Projektziele</h2>
        <ul className="space-y-2">
          {project.objectives.map((objective, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Bildergalerie</h2>
        {getGalleryComponent()}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Lösungen & Ergebnisse</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Implementierte Lösungen</h3>
            <ul className="space-y-2">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Erzielte Ergebnisse</h3>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {project.testimonial && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Kundenstimme</h2>
          <blockquote className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg italic mb-4">{project.testimonial.content}</p>
            <footer>
              <strong>{project.testimonial.author}</strong>
              <span className="text-gray-500"> - {project.testimonial.role}</span>
            </footer>
          </blockquote>
        </section>
      )}
    </>
  );
};

export default ProjectDetails;