import UserProfile from "./UserProfile"
import { ImSearch } from 'react-icons/im';

const TitleBar = () => {
  return (
    <div className="titleBar">
        <p className="fundingTitle">Funding</p>
        <input name="searchResult" type="texts"  placeholder="What are you looking for"/>
        <ImSearch className="searchIcon"/>
        <UserProfile />
    </div>
  )
}

export default TitleBar