import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import ReferenceCard from './ReferenceCard';
import { projects } from '../../data/projects';

const References = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/projekte/${projectId}`);
  };

  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Referenzen"
          subtitle="Einblicke in unsere erfolgreich realisierten Projekte"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="cursor-pointer"
            >
              <ReferenceCard
                title={project.title}
                description={project.overview}
                imageUrl={project.bannerImage}
                category={project.industry}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;