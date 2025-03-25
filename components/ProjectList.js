import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default ProjectList;
