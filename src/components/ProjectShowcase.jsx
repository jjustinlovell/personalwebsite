import React from "react";
import LinkButton from "./LinkButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function ProjectShowcase({
  title,
  description,
  imageLink,
  githubLink,
  liveLink,
}) {
  return (
    <div className="w-3/4 h-auto p-6 mt-10 space-y-5 text-white border border-white rounded-sm pointer-events-auto border-1 md:w-2/5 bg-neutral-950">
      <div className="font-semibold text-left">
        <h1>{title}</h1>
      </div>
      <img
        src={imageLink}
        alt=""
        className="transition-all duration-500 hover:scale-105"
      />
      <p className="text-sm text-left md:text-base">{description}</p>
      <div className="gap-5 sm:flex">
        <LinkButton icon={faGithub} href={githubLink}>
          Github
        </LinkButton>

        {liveLink ? (
          <LinkButton icon={faLink} href={liveLink}>
            Demo
          </LinkButton>
        ) : null}
      </div>
    </div>
  );
}
