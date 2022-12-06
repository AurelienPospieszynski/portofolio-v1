import { SectionWrapper } from "../atom/SectionWrapper";
import { Project } from "./Project";
import { GITHUB_USERNAME } from "../../lib/config";
import { getListOfUrlRepositoriesUrl } from "../../lib/api-url";
import { useEffect, useState } from "react";
import { Loader } from "../atom/Loader/Loader";
export const ProjectSection = () => {
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME))
      .then((r) => r.json())
      .then((repo) => setProjects(repo))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error !Might be the github token</p>;
  }

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap justify-center gap-8">
        {projects?.map((repository) => {
          return <Project key={repository.name} {...repository} />;
        })}
      </div>
    </SectionWrapper>
  );
};
