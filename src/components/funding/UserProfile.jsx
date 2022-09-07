import { MdOutlineEmail, MdOutlineNotificationsNone } from 'react-icons/md'

import userIcon  from '../../assets/userIcon.png'

const UserProfile = () => {
  return (
    <div className="userProfile">
        <MdOutlineEmail />
        <MdOutlineNotificationsNone />
        <div className='account'>
            <img className='userImage' src={userIcon} alt='user' />
            <div className='accountDetails'>
              <p>Talent Mwangi</p>
              <p>TechPrenuer</p>
            </div>
        </div>
        <p className='email'>2</p>
        <p className='notification'>2</p>
    </div>
  )
}

export default UserProfile