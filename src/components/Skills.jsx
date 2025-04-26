// Skills.jsx
import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "Flutter Skills",
      skills: [
        {name: "Flutter Framework"},
        {name: "State Management"},
        {name: "Package Integration"},
        {name: "API Integration"},
      ]
    },
    {
      title: "Backend Integration",
      skills: [
        {name: "SupaBase"},
        {name: "Firebase"},
        {name: "API Handling"},
        {name: "Django Framework"},

      ]
    },
    {
      title: "Software Engineering Principles",
      skills: [
        {name: "Design Patterns"},
        {name: "Architecture Patterns"},
        {name: "Clean Code"},
        {name: "SOLID Principles"},
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I've honed my skills in Flutter development and related technologies to deliver exceptional mobile applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-green-900/20 transition duration-500 ease-in-out">
            <h3 className="text-xl font-bold mb-4 text-green-400">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    {/* <span className="text-green-400">{skill.level}%</span> */}
                  </div>
                  {/* <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-400 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;