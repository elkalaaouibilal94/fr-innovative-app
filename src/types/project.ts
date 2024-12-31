export interface Project {
  id: string;
  title: string;
  bannerImage: string;
  client: string;
  industry: string;
  overview: string;
  objectives: string[];
  deliverables: string[];
  solutions: string[];
  results: string[];
  testimonial?: {
    content: string;
    author: string;
    role: string;
  };
  technologies: string[];
  timeline: {
    start: string;
    end: string;
  };
  images: {
    url: string;
    caption: string;
  }[];
  relatedProjects: string[];
}