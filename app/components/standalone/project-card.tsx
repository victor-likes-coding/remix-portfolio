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

export interface ProjectCardProps {
  title: string;
  repo: string;
  description: string;
  contributions: string[];
  live?: string;
}

function ProjectCard({
  title,
  repo,
  description,
  contributions,
}: ProjectCardProps) {
  return (
    <Card className="max-full bg-slate-900 border border-blue-500  text-[#fff] rounded-none">
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
          <AccordionItem aria-label="contributions" title="Contributions">
            <ul className="list-disc list-inside">
              {contributions.map((contribution, index) => (
                <li className="mb-2 last:mb-0" key={`${contribution}-${index}`}>
                  {contribution}
                </li>
              ))}
            </ul>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
