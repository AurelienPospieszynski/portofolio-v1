import { EMAIL, SOCIAL_NETWORKS } from "../lib/config";
import { Typography } from "./atom/Typography";
import { ButtonSocialNetwork } from "./atom/ButtonSocialNetwork";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 p-4 md:p-8 ">
      <Typography variant="h2">Contact me !</Typography>
      <div className="flex flex-col items-center gap-2">
        <Typography variant="body2">
          I’ll be happy to chat with you about a potential job 😁
        </Typography>
        <a
          className="text-base underline text-primary"
          href={`mailto:${EMAIL}`}
        >
          {EMAIL}
        </a>
        <ButtonSocialNetwork socialNetworks={SOCIAL_NETWORKS} />
      </div>
      <p>©Copyright 2022 - Aurelien Pospieszynski</p>
    </footer>
  );
};
