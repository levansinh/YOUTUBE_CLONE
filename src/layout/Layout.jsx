import { useState } from "react";
import Navbar from "./NavBar";
import SideBar from "./SideBar";
function Layout(props) {
  const [active,setActive] = useState(false)
  const handleToggleSidebar = () => {

  }
    return ( 
        <div >
          <div style={{height:"7.5vh"}} className="">
          <Navbar active={active} setActive={setActive}/>
          </div>
          <div className="flex h-[100vh]" >
         <div className="w-[250px]"><SideBar/></div>
         <div className="flex flex-1"> {props.children}</div>

          </div>
        </div>
    );
}

export default Layout;