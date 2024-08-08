import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {                                                                                                                                     
    const [isMenueOpen,setIsMenueOpen] =useState (false);
    const handleMenuToggler = ( ) => {
        setIsMenueOpen(!isMenueOpen)
    }

    const navItems =[
        {path: "/", title: "Strat a search"},
        {path: "/my-job", title: "My Jobs"},
        {path: "salary", title: "Salary Estimat"},
        {path: "/post-job", title: "Post A Job"},
    ]
  return (
    <header>
        <nav className='flex item-center gap-2 text-2xl'> 
            {/* add logo*/}
            <a href="/"><span>Job Portal</span></a>
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
                <Link to='/login' className ='py-2 px-5 border rounded'>Long in</Link>
                <Link to='/sing-up'>Sing up</Link>

            </div>
        </nav>
    </header>
  )
}

export default Navbar