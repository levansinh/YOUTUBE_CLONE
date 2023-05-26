import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFilm } from "@fortawesome/free-solid-svg-icons";
function SideBar() {
  const mainLinks = [
    {
      icon: <FontAwesomeIcon icon={faHouse} className="text-xl" />,
      name: "Home",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Library",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "History",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Your Videos",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Music",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Sport",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Gaming",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Settings",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Report history",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Help",
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Send feedback",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];

  return (
    <div className="w-2/12  px-5 overflow-auto pb-8 sidebar ">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }, index) => (
          <li key={index} className="pl-6 py-3 hover:bg-gray-200">
            <a href="#" className="text-sm gap-5 items-center">
              {icon}
              <span className="text-sm pl-2 tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }, index) => (
          <li key={index} className="pl-6 py-3 hover:bg-gray-200">
            <a href="#" className="text-sm gap-5 items-center">
              {icon}
              <span className="text-sm pl-2 tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name }, index) => (
          <li key={index} className="pl-6 py-3 hover:bg-gray-200">
            <a href="#" className="text-sm gap-5 items-center">
              {icon}
              <span className="text-sm pl-2 tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icon, name }, index) => (
          <li key={index} className="pl-6 py-3 hover:bg-gray-200">
            <a href="#" className="text-sm gap-5 items-center">
              {icon}
              <span className="text-sm pl-2 tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2022 Google</span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        This clone is for educational purpose only.
      </p>
      
    </div>
  );
}

export default SideBar;
