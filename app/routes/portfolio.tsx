import ProjectCard from '~/components/standalone/project-card';
// this can later be used in a loader
import { projects } from '~/data/projects';

export default function Portfolio() {
  return (
    <section className="Portfolio max-h-full overflow-y-scroll">
      <div className="grid gap-3 place-content-center mt-3">
        {projects.map((project, index) => {
          const { repo } = project;
          return <ProjectCard {...project} key={`${repo}-${index}`} />;
        })}
      </div>
    </section>
  );
}
