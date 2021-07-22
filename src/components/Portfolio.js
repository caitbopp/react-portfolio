import React from 'react';
import { projects } from '../../data';



export default function Projects() {
  return (
    // <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
        </div>
        {projects.map((project) => (
          <section className="row">
            <div className="col-lg-6 col-sm-12 mb-3">
              <div className="card">
                <a className="image-container" href={project.deployedLink} target="blank">
                  <img src={project.image} alt="A screenshot of a project webpage"></img></a>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <a href={project.deployedLink}>Deployed version</a> |
                    <a href={project.gitHubLink}>GitHub repository</a>
                  </div>
              </div>
              </div>
          </section>
        ))};

      </div>
    // </section>
  );
}