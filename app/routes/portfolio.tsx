import ProjectCard from '~/components/standalone/project-card';
// this can later be used in a loader
import { projects } from '~/data/projects';

export default function Portfolio() {
  return (
    <section className="Portfolio min-h-without-navbar overflow-y-scroll">
      <div className="flex flex-col items-center gap-4 my-4 px-4 md:w-3/4 md:mx-auto md:gap-6 md:my-6">
        {projects.map((project, index) => {
          const { repo } = project;
          return <ProjectCard {...project} key={`${repo}-${index}`} />;
        })}
      </div>
    </section>
  );
}
