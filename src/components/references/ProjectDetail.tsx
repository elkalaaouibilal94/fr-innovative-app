import React from 'react';
import { ArrowLeft, Calendar, Users, CheckCircle } from 'lucide-react';
import type { Project } from '../../types/project';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-300 hover:text-white mb-8"
          >
            <ArrowLeft className="mr-2" /> Zurück zur Übersicht
          </button>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <Calendar className="mr-2" size={16} />
              {new Date(project.timeline.start).toLocaleDateString()} - {new Date(project.timeline.end).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Users className="mr-2" size={16} />
              {project.team.length} Teammitglieder
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Projektübersicht</h2>
              <p className="text-gray-600">{project.overview}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Bildergalerie</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <figure key={index} className="relative">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <figcaption className="mt-2 text-sm text-gray-500">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
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
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
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

              <div className="mb-8">
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

              <div>
                <h3 className="text-lg font-semibold mb-2">Projektteam</h3>
                <ul className="space-y-2">
                  {project.team.map((member, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="font-medium">{member.name}</span>
                      <span className="text-gray-500">{member.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;