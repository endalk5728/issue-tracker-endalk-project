'use client'
import Link from 'next/link';
import React from 'react'
import { AiFillBug } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Nav = () => {

  const currentPath=usePathname();
const links=[
  {label:'Dashboard',href:'/'},
  {label:'Issues',href:'/issue'}

]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-s h-14 items-center' >
    {/* add logo */}
    <Link href='/'><AiFillBug/></Link>
    <ul className="flex space-x-6">
      {links.map(link => (
        <li key={link.href}>
          <Link
            className={classNames({
              'text-zinc-900':link.href ===currentPath,
              'text-zinc-500':link.href !==currentPath,
              'hover:text-zinc-800 transition-colors':true
            })}
            href={link.href}
          >
            {link.label}
            
          </Link>
        </li>
      ))}
    </ul>
{/* {links.map(link=><Link key={link.href}
className={
classNames({
  'text-zinc-900':link.href ===currentPath,
  'text-zinc-500':link.href !==currentPath,
  'hover:text-zinc-800 transition-colors':true
})

}>

</Link>)} */}




    </nav>
    

   
  )
}

export default Nav