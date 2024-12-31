import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="text-center">
      <div className="relative w-48 h-48 mx-auto mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default TeamMember;