import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images } from "../assets/images";
import {
  faBars,
  faSearch,
  faMicrophone,
  faXmark,
  faCamera,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__first">
        <div className="navbar__first__toogle-btn">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="navbar__first__logo">
          <Link to="/">
            <img src={images.logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar__second flex gap-5 items-center justify-center">
        <form action="">
          <div className="flex item-center h-10 px-4 pr-0 border">
            <div className="navbar__second__search pr-5">
              <div className="navbar__second__search__Search text-xl pr-5 ">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                className="w-96 focus:outline-none border-none "
                type="text"
                placeholder="Tìm Kiếm ..."
              />
              <div className="navbar__second__search__close">
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
            <button className="navbar__second text-xl cursor-pointer h-10 w-16">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
        <div className="rounded-full cursor-pointer py-[10px] px-[15px] text-xl text hover:bg-gray-400">
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
      </div>
      <div className="navbar-last flex gap-5 text-2xl items-center">
        <FontAwesomeIcon className="" icon={faCamera} />
        <div className="relative">
          <FontAwesomeIcon className="" icon={faBell} />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 px-1 rounded-full">
            9+
          </span>
        </div>
        <img className="w-9 h-9 rounded-full" src="https://i.pinimg.com/236x/93/a0/0a/93a00a3684652031a0c398c5d54d3d10.jpg" alt="logo" />
      </div>
    </div>
  );
}

export default Navbar;
