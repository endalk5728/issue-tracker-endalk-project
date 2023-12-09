
import Link from 'next/link';
import React from 'react'
import { AiFillBug } from "react-icons/ai";

const Nav = () => {

const Links=[
  {lable:'Dashboard',href:'/'},
  {label:'Issues',href:'/issue'}

]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-s h-14 items-center' >
    {/* add logo */}
    <Link href='/'><AiFillBug/></Link>
<ul className='flex space-x-6'>

</ul>
    </nav>
    

   
  )
}

export default Nav