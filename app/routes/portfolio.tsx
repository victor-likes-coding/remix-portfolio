import ProjectCard from '~/components/standalone/project-card';
// this can later be used in a loader
import { projects } from '~/data/projects';

export default function Portfolio() {
  return (
    <section className="Portfolio max-h-full overflow-y-scroll">
      <div className="grid gap-4 place-content-center mt-4 mb-4">
        {projects.map((project, index) => {
          const { repo } = project;
          return <ProjectCard {...project} key={`${repo}-${index}`} />;
        })}
      </div>
    </section>
  );
}
