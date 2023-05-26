import Navbar from "./NavBar";
import SideBar from "./SideBar";
function Layout(props) {
    return ( 
        <div >
          <div style={{height:"7.5vh"}} className="">
          <Navbar/>
          </div>
          <div className="flex" style={{height:"92.5vh" }}>
           {/* <SideBar/> */}
          {props.children}
          </div>
        </div>
    );
}

export default Layout;