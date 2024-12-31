import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
      <div className="text-blue-600 mb-6">
        <Quote size={32} />
      </div>
      <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">{content}</p>
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;