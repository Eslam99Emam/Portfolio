// About.jsx
import React from 'react';
import avatar from '../assets/images/Me.jpg';

function About() {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-400 mx-auto">
              <img src={avatar} alt="avatar" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400 rounded-full filter blur-xl opacity-50"></div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-green-400 mb-6"></div>
          <p className="text-gray-300 mb-4">
            I'm a passionate Flutter developer with expertise in creating beautiful and performant cross-platform mobile applications. With a deep understanding of Dart and the Flutter framework, I build applications that not only look great but also provide exceptional user experiences.
          </p>
          <p className="text-gray-300 mb-4">
            My approach to development is centered around clean code architecture, state management best practices, and UI/UX Implementation.
          </p>
          <p className="text-gray-300 mb-6">
            When I'm not coding, I try to contribute to the Flutter community, experiment with new packages, and explore ways to optimize application performance.
          </p>
          <div className="flex space-x-4">
            <a href="https://drive.google.com/file/d/1SDyWdby_OtOEB8QDuR70a89KPsBWTOMs/view?usp=sharing" className="text-green-400 hover:text-green-300 transition flex items-center">
              <span>Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
