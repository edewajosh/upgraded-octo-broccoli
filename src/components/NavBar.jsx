import { AiFillHome, AiOutlineAlipayCircle } from 'react-icons/ai'
import { BsFolder, BsPeople } from 'react-icons/bs'
import { GrRisk, GrMoney } from 'react-icons/gr'
import { HiAcademicCap } from 'react-icons/hi'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname){
      return true
    }
  }
  return (
    <div className='nav'>
        <nav className='navbar'>
            <h3><AiOutlineAlipayCircle/> Melanin Kapital</h3>
            <ul className='navbarNav'>
                <li className={ pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarItem'} 
                    onClick={() => navigate('#')}>
                  <AiFillHome/> Home
                </li>
                <li className={ pathMatchRoute('/business') ? 'navbarListItemNameActive' : 'navbarItem'} 
                    onClick={() => navigate('#')} >
                  <BsFolder/> Business </li>
                <li className={ pathMatchRoute('/risk-profile') ? 'navbarListItemNameActive' : 'navbarItem'} 
                    onClick={() => navigate('#')}>
                  <GrRisk/> <span className="riskProfile">Risk Profile</span>
                </li>
                <li className={ pathMatchRoute('/funding') ? 'navbarListItemNameActive' : 'navbarItem'} 
                    onClick={() => navigate('/funding')}>
                  <GrMoney/> Funding 
                </li>
                <li className={ pathMatchRoute('/konnect') ? 'navbarListItemNameActive' : 'navbarItem'} 
                    onClick={() => navigate('#')}>
                  <BsPeople/> Konnect 
                </li>
                <li className={ pathMatchRoute('/academy') ? 'navbarListItemNameActive' : 'navbarItem'}
                    onClick={() => navigate('#')}>
                  <HiAcademicCap /> Academy 
                  </li>
                <li className={ pathMatchRoute('/support') ? 'navbarListItemNameActive' : 'navbarItem'}
                    onClick={() => navigate('#')}>
                  <MdOutlineMarkEmailUnread/> Support 
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar