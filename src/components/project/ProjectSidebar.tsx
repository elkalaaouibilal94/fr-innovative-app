import React from 'react';
import type { Project } from '../../types/project';

interface ProjectSidebarProps {
  project: Project;
}

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ project }) => {
  return (
    <div className="lg:sticky lg:top-24 self-start">
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Projektdetails</h3>
          <dl className="space-y-2">
            <dt className="text-gray-500">Kunde</dt>
            <dd className="font-medium">{project.client}</dd>
            <dt className="text-gray-500">Branche</dt>
            <dd className="font-medium">{project.industry}</dd>
            <dt className="text-gray-500">Zeitraum</dt>
            <dd className="font-medium">
              {new Date(project.timeline.start).toLocaleDateString()} - {new Date(project.timeline.end).toLocaleDateString()}
            </dd>
          </dl>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Technologien</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;