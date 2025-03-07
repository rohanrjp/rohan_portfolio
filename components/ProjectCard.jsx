import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-slate-300 dark:bg-secondary/40 xl:bg-[110%]">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          ></Image>
          <div className="flex">
            <Link
              href={project.github}
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <GitHubLogoIcon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium absolute top-4 left-5 mb-2">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
