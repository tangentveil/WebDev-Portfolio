import ProjectCard from "./ProjectCard";
// import { projects } from '../data'
import SectionTitle from "./SectionTitle";
import { ContentfulCMS } from "../ContentfulCMS";

const Projects = () => {
  const { loading, projects } = ContentfulCMS();


  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />

      {loading && <h2 className="text-xl tracking-wide font-medium">Loading...</h2>}

      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
