import ProjectCard from '~/components/standalone/project-card';
// this can later be used in a loader
import { projects } from '~/data/projects';

export default function Portfolio() {
  return (
    <section className="Portfolio min-h-without-navbar overflow-y-scroll">
      <div className="flex flex-col items-center gap-4 mt-4 mb-4 px-4 w-screen">
        {projects.map((project, index) => {
          const { repo } = project;
          return <ProjectCard {...project} key={`${repo}-${index}`} />;
        })}
      </div>
    </section>
  );
}
