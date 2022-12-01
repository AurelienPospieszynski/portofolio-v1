import clsx from "clsx";
/**
 *
 * @param socialNetworks {{url: string, name: string, icon: React.ReactElement}[]}
 * @param className string
 * @constructor
 */
export const ButtonSocialNetwork = ({ socialNetworks, className }) => {
  return (
    <div className={clsx("flex gap-4", className)}>
      {socialNetworks.map(({ url, name, icon }) => (
        <button key={url} className="hover:scale-105 hover:shadow-xl">
          <a
            href={url}
            className="flex items-center gap-1 p-3 text-base rounded-full text bg-lime-200 text-primary hover:no-underline"
          >
            {icon} <span className="">{name}</span>
          </a>
        </button>
      ))}
    </div>
  );
};
