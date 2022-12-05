import { FULL_NAME } from "../../lib/config";

export const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center max-w-5xl m-auto sm:flex-col md:flex-row">
      <img
        width={300}
        height={300}
        src="/images/image-portefolio.png"
        alt="avatar"
        className="top-[-28px] right-[-24px] rounded shadow-lg md:absolute"
      />

      <div className="flex flex-col gap-4 md:relative md:mr-48">
        <h1 className="text-6xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] md:text-5xl">
          <span className="pl-1 text-xl">
            Hey there 👋 <br></br>
          </span>
          I'm{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-transparent drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] ">
            {FULL_NAME}
          </span>
        </h1>
        <p className="max-w-xl text-xl dark:drop-shadow-[0_0px_20px_rgba(0,0,0,1)]">
          <b>
            <i>I'm a software developer </i>
          </b>
          that make things on internet.<br></br>
          I'm very happy to see you here.
          <b>
            <i> React oriented</i>{" "}
          </b>
          I wanna keep skilling up throw my motivation and my passion !
        </p>
      </div>
    </div>
  );
};
