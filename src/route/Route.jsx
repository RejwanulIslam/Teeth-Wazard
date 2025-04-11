import { createBrowserRouter } from "react-router-dom";
import Maninlayout from "../mainlayout/Maninlayout";
import Home from "../component/Home";
import About from "../component/About";
import AllTritment from "../component/AllTritment";
import Profile from "../component/Profile";
import Myappioment from "../component/Myappioment";
import Detels from "../component/Detels";



 const  router = createBrowserRouter([
    {
        path:"/",
        element:<Maninlayout></Maninlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch("/service.json")
            },
            {
                path:"/alltritment",
                element:<AllTritment></AllTritment>,
                loader:()=>fetch("/service.json")
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            },
            {
                path:"/myappioment",
                element:<Myappioment></Myappioment>
            },
            {
                path:"/detels/:id",
                element:<Detels></Detels>,
                loader:()=>fetch("/service.json")
            }
        ]
        
    }
])

export default router