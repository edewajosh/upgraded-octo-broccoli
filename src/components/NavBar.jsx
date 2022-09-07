import { AiFillHome, AiOutlineAlipayCircle } from 'react-icons/ai'
import { BsFolder, BsPeople } from 'react-icons/bs'
import { GrRisk, GrMoney } from 'react-icons/gr'
import { HiAcademicCap } from 'react-icons/hi'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'

const NavBar = () => {
  return (
    <div className='nav'>
        <nav className='navbar'>
            <h3><AiOutlineAlipayCircle/> Melanin Kapital</h3>
            <ul className='navbarNav'>
                <li className='navbarItem '><AiFillHome/> Home </li>
                <li className='navbarItem'><BsFolder/> Business </li>
                <li className='navbarItem'><GrRisk/> <span className="riskProfile">Risk Profile</span> </li>
                <li className='navbarItem'><GrMoney/> Funding </li>
                <li className='navbarItem'><BsPeople/> Konnect </li>
                <li className='navbarItem'><HiAcademicCap /> Academy </li>
                <li className='navbarItem'><MdOutlineMarkEmailUnread/> Support </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar