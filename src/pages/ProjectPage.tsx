import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectDetails from '../components/project/ProjectDetails';
import ProjectSidebar from '../components/project/ProjectSidebar';

const ProjectPage: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const referencesSection = document.getElementById('references');
      if (referencesSection) {
        referencesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Helmet>
            <title>Projekt nicht gefunden - FR Innovative Haustechnik</title>
            <meta name="description" content="Das gewünschte Projekt wurde nicht gefunden." />
            <meta name="robots" content="noindex, follow" />
          </Helmet>
          <h1 className="text-2xl font-bold mb-4">Projekt nicht gefunden</h1>
          <button
            onClick={handleBack}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Zurück zur Übersicht
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Dynamic Metadata */}
      <Helmet>
        <title>{project.title} - FR Innovative Haustechnik</title>
        <meta name="description" content={project.description} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://www.fr-innovative-haustechnik.de/projekte/${projectId}`}
        />
      </Helmet>

      {/* Header */}
      <div
        className="relative bg-gray-900 text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${project.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-300 hover:text-white mb-8"
          >
            <ArrowLeft className="mr-2" /> Zurück zur Übersicht
          </button>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <ProjectDetails project={project} />
          </div>
          <ProjectSidebar project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
