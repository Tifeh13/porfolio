import React from 'react';

function ProjectCard({ item }) {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
        <img src={item.img} alt={item.title} className="w-full" />
        <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
          <h1 className="font-bold text-3xl">{item.title}</h1>
          <p className="font-bold">{item.description}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
