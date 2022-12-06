import { SectionWrapper } from "../atom/SectionWrapper";
import { Project } from "./Project";
import { GITHUB_USERNAME } from "../../lib/config";
import { getListOfUrlRepositoriesUrl } from "../../lib/api-url";
import { useEffect } from "react";

export const ProjectSection = () => {
  useEffect(() => {
    fetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME))
      .then((r) => r.json())
      .then((repo) => console.log(repo));
  }, []);

  const projects = [
    {
      name: "DEMO",
      description: "DEMO",
      stargazerCount: 12,
      url: "https://github.com",
      homepageUrl: "https://github.com",
    },
  ];

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap justify-center gap-8">
        {/* GitHub Repository - Exercise (replace this) */}
        <Project {...projects[0]} />
      </div>
    </SectionWrapper>
  );
};
