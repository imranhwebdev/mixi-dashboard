import { useContext, useEffect, useRef } from "react";
import siteLogo from '../../assets/images/site-logo.svg';
import {MdOutlineClose} from "react-icons/md"
import {Link } from "react-router-dom";
import gameIcon from "../../assets/icons/games.svg"
import stakingIcon from "../../assets/icons/staking.svg"
import affiliateIcon from "../../assets/icons/star.svg"
import telegramIcon from "../../assets/icons/Telegram.svg"
import "./Sidebar.scss"
import { SidebarContext } from "../../context/SidebarContext";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}>
      <div className="sidebar-top">
        <Link to='/' className="sidebar-brand">
          <img src={siteLogo} />
        </Link>
      </div>
      <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="games" className="menu-link active">
                <span className='menu-link-icon'>
                  <img src={gameIcon} alt="" />
                </span>
                <span className='menu-link-text'> Games </span>
              </Link> 
            </li>
            <li className="menu-item">
              <Link to="staking" className="menu-link">
                <span className='menu-link-icon'>
                  <img src={stakingIcon} alt="" />
                </span>
                <span className='menu-link-text'> Staking </span>
              </Link> 
            </li>
            <li className="menu-item">
              <Link to="affiliate" className="menu-link">
                <span className='menu-link-icon'>
                  <img src={affiliateIcon} alt="" />
                </span>
                <span className='menu-link-text'> Affiliate </span>
              </Link> 
            </li>
          </ul>
          <a href="/" className='inline_btn' target='_blank'> 
            <span><img src={telegramIcon} alt="" /></span> Join the Telegram
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
