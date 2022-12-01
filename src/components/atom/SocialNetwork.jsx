import clsx from "clsx";

/**
 *
 * @param socialNetworks {{url: string, name: string, icon: React.ReactElement}[]}
 * @param className string
 * @constructor
 */
export const SocialNetworks = ({ socialNetworks, className }) => {
  return (
    <div className={clsx("flex gap-4", className)}>
      {socialNetworks.map(({ url, icon }) => (
        <a
          key={url}
          href={url}
          className="flex items-center gap-1 text-base rounded-full text text-primary decoration-dashed hover:bg-lime-200"
        >
          {icon} <span className=""></span>
        </a>
      ))}
    </div>
  );
};
