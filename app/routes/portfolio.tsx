import { LinkIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  CardBody,
  Accordion,
  AccordionItem,
  Divider,
  Button,
} from '@nextui-org/react';
import { Link } from '@remix-run/react';

export default function Portfolio() {
  const projects = [
    {
      repo: 'https://github.com/victor-likes-coding/asylum-rg-fe-starter',
      title: 'Asylum Report Generator',
      description:
        'A search tool to give a user-friendly view into a large dataset of asylum case decisions.',
      contributions: [
        'Collaborate with product managers, designers and engineers to design, build, and ship new features',
        'Write clean, high-quality scalable code to improve performance and reduce duplicate code',
        'Debug issues and produce high-quality code to fix them',
        'Translate prototypes and designs into clean, valid, accessible,launch-ready code.',
        'Explore new technologies, industry trends and technical innovation',
      ],
      live: '',
    },

    {
      repo: 'https://github.com/victor-likes-coding/web-sprint-challenge-build-a-web-api',
      title: 'Build a Web API',
      description: 'A RESTful API built with Node.js and Express',
      contributions: [
        'Built an API with CRUD functionality for projects and actions using Express, implementing endpoints and handling requests and responses.',
        'Created NPM scripts, including "start" and "server", to run the Express API server using Node and nodemon respectively. Installed nodemon as a development dependency.',
        'Implemented Express middleware functions to enhance the functionality and organization of the API, consuming them in the appropriate places within the code.',
      ],
      live: '',
    },

    {
      repo: 'https://github.com/victor-likes-coding/web-sprint-challenge-adding-data-persistence',
      title: 'Adding Data Persistence',
      description:
        'A RESTful API built with Node.js, Express, and SQLite3 to be able to persist data across server restarts.',
      contributions: [
        'Designed and implemented a database using SQL and SQLite, including tables for projects, resources, tasks, and resource assignments.',
        'Utilized KnexJS, a SQL query builder for Node.js, to build migration files in the data/migrations folder, defining the structure and constraints of the database tables.',
        'Developed an API with endpoints for creating, reading, updating, and deleting resources, projects, and tasks, utilizing appropriate data modeling and connecting related data through foreign key relationships.',
      ],
    },
  ];
  return (
    <section className="Portfolio">
      <div className="grid gap-3 place-content-center mt-3">
        {projects.map(
          ({ contributions, description, repo, title, live }, ix) => (
            // ! TODO: extract into own component
            <Card
              className="max-full bg-black text-[#fff]"
              key={`${repo}-${ix}`}>
              <CardHeader className="justify-center">
                {title}
                <Button
                  isIconOnly={true}
                  className="bg-transparent absolute top-1/99 right-px align-middle">
                  <Link to={repo}>
                    <LinkIcon color="white" className="w-4 h-4" />
                  </Link>
                </Button>
              </CardHeader>
              <Divider className="bg-[#fff]" />
              <CardBody className="py-3">
                {description}
                <Accordion
                  className="w-full mt-2"
                  isCompact={true}
                  itemClasses={{
                    title: 'text-[#fff]',
                  }}>
                  <AccordionItem
                    aria-label="contributions"
                    title="Contributions">
                    <ul className="list-disc list-inside">
                      {contributions.map((contribution, index) => (
                        <li
                          className="mb-2 last:mb-0"
                          key={`${contribution}-${index}`}>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                </Accordion>
              </CardBody>
            </Card>
          ),
        )}
      </div>
    </section>
  );
}
