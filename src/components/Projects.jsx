// Projects.jsx
import React, { useState, useRef, useEffect } from 'react';
import whentodo from '../assets/images/When_to-do.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "When To-Do",
      description: "When To-Do is a task management mobile app designed to help users organize, schedule, and visualize their tasks across daily, weekly, and calendar-based views.",
      tech: ["Flutter", "Provider", "SupaBase", "Google Authentication"],
      imageUrl: whentodo,
      githubUrl: "https://github.com/Eslam99Emam/When_to_do",
    },
    {
      id: 2,
      title: "Weather Tracker App",
      description: "The Weather Forecast App is a Flutter application designed following Clean Architecture principles, offering users real-time weather information based on their location or manually selected countries.",
      tech: ["Flutter", "Riverpod", "Clean Architecture", "Lottie Animations", "API Integration", "Geolocator & Geocoding"],
      githubUrl: "https://github.com/Eslam99Emam/weather_app",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const carouselRef = useRef(null);

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Show/hide controls when hovering over the carousel
  const handleMouseEnter = () => {
    if (projects.length > 1) {
      setShowControls(true);
    }
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  // Automatic scrolling effect for infinite feeling
  useEffect(() => {
    if (projects.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Here are some of the featured projects I've worked on. Each demonstrates my skills in Flutter development, Backend Integration, API Handling, and problem-solving.
        </p>
      </div>

      <div
        className="relative max-w-5xl mx-auto overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={carouselRef}
      >
        {/* Project carousel */}
        <div className="flex transition-transform duration-500 ease-in-out my-4" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-green-900/30 transition duration-300">
                <img src={project.imageUrl ?? `https://placehold.co/600x400/transparent/22c55e?text=${project.title}`} alt={project.title} className="h-64 w-full object-contain bg-gray-700" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-green-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-700 text-green-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.githubUrl} className="flex items-center text-gray-300 hover:text-green-400 transition">
                      <span>GitHub</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons - only show if more than one project */}
        {projects.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900/80 text-green-400 p-2 rounded-full transition ${showControls ? 'opacity-70' : 'opacity-0'}`}
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900/80 text-green-400 p-2 rounded-full transition ${showControls ? 'opacity-70' : 'opacity-0'}`}
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots indicator for multiple projects */}
        {projects.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-green-400 w-6' : 'bg-gray-600'}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;