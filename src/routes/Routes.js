import Home from "../pages/Home";
import Search from "../pages/Search";
import Watch from "../pages/Watch";

// import * as LayoutHidden from '../layout/SideBarHidden'

const publicRouters =[
    {path:'/',component:Home},
    {path:'/search',component:Search},
    {path:'/watch/:id',component:Watch},
]
export {publicRouters}