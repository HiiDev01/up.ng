import React, { useEffect, useState } from 'react'
import { MdPeopleOutline } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import '../styles/Nav.css'
import { Link } from 'react-router-dom';



const navItem = [
  {id: 1, name: "home", path: "/"},
  {id: 2, name: "course", path: "/"},
  {id: 3, name: "path", path: "/"},
  {id: 4, name: "pricing", path: "/"},
  {id: 5, name: "teacher", path: "/"},
  {id: 6, name: "", path: "/", icon: <MdPeopleOutline size={25}/>},
]
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(()=>{
    const handleScroll = ()=>{
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return ()=> window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className={isScrolled ? "nav scrolled" : "nav"}>
      <div className="logo">
        <h1>up.<span>ng</span></h1>
      </div>
      <div className='navitemCon'>
        <div className='navitemOne'>
          {navItem.map((item)=>(
            <a href={item.path} key={item.id}>
              {item.name}
               {item.icon}
            </a>
          ))}
        </div>
        <div className='navitemTwo'>
          <a href="">
            <IoMdUnlock size={25}/>
          </a>
          <a href="">
            get started
          </a>
        </div>
      </div>
    </div>
  )
}

export default Nav
