import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFilm } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
const {pathname} = useLocation()
  const mainLinks = [
    {
      icon: <FontAwesomeIcon icon={faHouse} className="text-xl" />,
      name: "Home",
      path:'/'
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Explore",
      path:'/explore'
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Shorts",
      path:'/shorts'
    },
    {
      icon: <FontAwesomeIcon icon={faFilm} className="text-xl" />,
      name: "Subscriptions",
      path:'/subscriptions'
    },
  ];
  console.log(pathname);
  const activeNavbar = mainLinks.findIndex((e) => e.path === pathname);

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
    <div className="w-full  px-5 overflow-auto pb-8 sidebar ">
      <ul className="flex flex-col border-b-2 border-zinc-200">
        {mainLinks.map(({ icon, name }, index) => (
          <li key={index} className={`pl-6 py-3 cursor-pointer hover:bg-zinc-100 rounded-xl ${activeNavbar === index ? 'bg-zinc-100 rounded-xl ': "" } `}>
            <Link href="#" className="text-sm gap-5 items-center">
              {icon}
              <span className="text-sm pl-2 tracking-wider">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-zinc-200">
        {secondaryLinks.map(({ icon, name }, index) => (
          <li key={index} className="pl-6 py-3 hover:bg-gray-200">
            <Link href="#" className="text-sm gap-5 items-center">
              {icon}
              <span className="text-sm pl-2 tracking-wider">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-zinc-200">
        {subscriptionLinks.map(({ icon, name }, index) => (
          <li key={index} className="pl-6 py-3 hover:bg-gray-200">
            <Link href="#" className="text-sm gap-5 items-center">
              {icon}
              <span className="text-sm pl-2 tracking-wider">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-zinc-200">
        {helpLinks.map(({ icon, name }, index) => (
          <li key={index} className="pl-6 py-3 hover:bg-gray-200">
            <Link href="#" className="text-sm gap-5 items-center">
              {icon}
              <span className="text-sm pl-2 tracking-wider">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-zinc-200">
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
