import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6'

const Navbar = () => {                                                                                                                                     
    const [isMenueOpen,setIsMenueOpen] =useState (false);
    const handleMenuToggler = ( ) => {
        setIsMenueOpen(!isMenueOpen)
    }

    const navItems =[
        {path: "/", title: "Start a search"},
        {path: "/my-job", title: "My Jobs"},
        {path: "salary", title: "Salary Estimat"},
        {path: "/post-job", title: "Post A Job"},
    ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'> 
            {/* add logo*/}
            <a href="/" className='flex item-center gap-2 text-2xl text-black'><span>Employment App</span></a>

            {/* nav item for large divice */}
            <ul className='hidden md:flex gap-12'>
                {navItems.map(({path,title}) => (
                    <li key={path} className='text-base text-primary'>
                        <NavLink 
                        to={path} 
                        className={({isActive}) =>isActive ? "active" : ""}
                        >
                            {title}
                        </NavLink>
                    </li>
                ))
                }
            </ul>
            {/*sinup and login btn */}
            <div className ="text-base text-primary font-medium space-x-5 hidden lg:block">
                <Link to='/login' className ='py-2 px-5 border rounded'>Log in</Link>
                <Link to='/sign-up' className ='py-2 px-5 border rounded bg-red text-white'>Sign up</Link>
            </div>
                 {/*mobile menu */}
            <div className='md:hidden block'>
                <button onClick={handleMenuToggler}>
                    {
                        isMenueOpen ? <FaXmark className='w-5 h-5 text-primary'/> :<FaBarsStaggered className='w-5 h-5 text-primary'/>
                    }
                </button>
            </div>
        </nav>

        {/* navitems for mobile */}
        <div className={`px-4 bg-black py--5 rounded-sm ${isMenueOpen ? "" : "hidden"}`}>
            <ul>
            {navItems.map(({path,title}) => (
                    <li key={path} className='text-base text-white first:text-white py-1'>
                        <NavLink 
                        to={path} 
                        className={({isActive}) =>isActive ? "active" : ""}
                        >
                            {title}
                        </NavLink>
                    </li>
                ))}

                <li className='text-white py-1'><Link to='/login'>Log in</Link></li>
                <li className='text-white py-1'><Link to='/sign-up'>Sign up</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar