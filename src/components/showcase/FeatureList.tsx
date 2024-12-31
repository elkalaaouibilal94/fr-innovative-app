import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <ul className="space-y-2 mt-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;