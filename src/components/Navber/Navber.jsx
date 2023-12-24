import { useState } from "react";
import Link from "./Link/Link";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";


const Navber = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/dashboard', name: 'Dashboard', id: 'dashboard' },
        { path: '*', name: 'Not Found', id: 'notFound' },
      ];
    return (
        <nav>
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open === true ? 
                    <IoCloseSharp  className="text-2xl "></IoCloseSharp>
                    : <CiMenuFries className="text-2xl "></CiMenuFries>
                }
            
            </div>
          <ul className={`md:flex duration-500 absolute md:static
          ${open ? 'top-10' : '-top-60'}
           bg-yellow-300 px-6`}>
            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
          </ul>
        </nav>
    );
};

export default Navber;