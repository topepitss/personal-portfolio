import trackerImage from '../assets/project-images/tracker.png';
import trackerImage1 from '../assets/project-images/tracker-1.png';
import trackerImage2 from '../assets/project-images/tracker-2.png';
import trackerImage3 from '../assets/project-images/tracker-3.png';
import trackerImage4 from '../assets/project-images/tracker-4.png';
import trackerImage5 from '../assets/project-images/tracker-5.png';
import portfolioImage from '../assets/project-images/portfolio.png';

export const projects = [
  {
    title: 'SustainHealth Candidate Recruitment Tracker',
    label: 'Featured project',
    status: 'Currently working',
    description:
      'A recruitment and compliance tracker for SustainHealth that monitors candidate records, document submissions, pending requirements, state requirements, and daily reports. Built with AI assistance using Codex while I handled requirements, testing, customization, and deployment.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Render', 'Codex AI Assistance'],
    image: trackerImage,
    // Replace these with 2 to 5 real screenshots of this project.
    gallery: [trackerImage1, trackerImage2, trackerImage3, trackerImage4, trackerImage5],
    githubUrl: '#', // TODO: Replace with your GitHub repository URL.
    liveUrl: 'https://sustainhealth-tracker.onrender.com/',
  },
  {
    title: 'Personal Portfolio Website',
    label: 'Portfolio project',
    status: 'Currently improving',
    description:
      'A responsive personal portfolio website built to present my CV, technical skills, experience, certifications, and projects in a recruiter-friendly format.',
    techStack: ['React', 'Vite', 'JavaScript', 'CSS'],
    image: portfolioImage,
    githubUrl: '#', // TODO: Replace with your GitHub repository URL.
    liveUrl: '#home',
  },
];
