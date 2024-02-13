import React, { useContext, useEffect, useRef, useState } from "react";
import siteLogo from '../../assets/images/site-logo.svg';
import {MdOutlineClose} from "react-icons/md"
import {Link } from "react-router-dom";
import telegramIcon from "../../assets/icons/Telegram.svg"
import "./Sidebar.scss"
import { SidebarContext } from "../../context/SidebarContext";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const [activeMenuItem, setActiveMenuItem] = useState("staking");
  const handleMenuClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    closeSidebar(); // Optional: Close the sidebar when a menu item is clicked
  };
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  const gameIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.8335 1.66675L3.41142 10.5733C3.12075 10.9221 2.97541 11.0965 2.97319 11.2438C2.97126 11.3718 3.02832 11.4937 3.12792 11.5742C3.2425 11.6667 3.46952 11.6667 3.92357 11.6667H10.0002L9.16688 18.3334L16.589 9.42687C16.8797 9.07806 17.025 8.90366 17.0272 8.75636C17.0292 8.62832 16.9721 8.50649 16.8725 8.426C16.7579 8.33341 16.5309 8.33341 16.0768 8.33341H10.0002L10.8335 1.66675Z" stroke="#636465" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;
const stakingIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M13.2813 13.2815C16.1334 12.8997 18.3332 10.4568 18.3332 7.50008C18.3332 4.27842 15.7215 1.66675 12.4998 1.66675C9.54315 1.66675 7.10025 3.86647 6.71839 6.71864M13.3332 12.5001C13.3332 15.7217 10.7215 18.3334 7.49984 18.3334C4.27818 18.3334 1.6665 15.7217 1.6665 12.5001C1.6665 9.27842 4.27818 6.66675 7.49984 6.66675C10.7215 6.66675 13.3332 9.27842 13.3332 12.5001Z" stroke="#CECFD2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;
const affiliateIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.40205 2.8778C9.59412 2.48869 9.69015 2.29413 9.82053 2.23197C9.93396 2.17789 10.0657 2.17789 10.1792 2.23197C10.3095 2.29413 10.4056 2.48869 10.5977 2.8778L12.4199 6.56944C12.4766 6.68432 12.5049 6.74176 12.5464 6.78635C12.5831 6.82584 12.6271 6.85783 12.6759 6.88056C12.7311 6.90623 12.7945 6.91549 12.9213 6.93402L16.9973 7.5298C17.4266 7.59253 17.6412 7.6239 17.7405 7.72874C17.8269 7.81995 17.8675 7.94529 17.8511 8.06985C17.8322 8.21302 17.6768 8.36436 17.3661 8.66702L14.4177 11.5387C14.3258 11.6282 14.2798 11.673 14.2502 11.7263C14.2239 11.7734 14.2071 11.8252 14.2006 11.8788C14.1933 11.9393 14.2041 12.0025 14.2258 12.129L14.9215 16.1851C14.9948 16.6129 15.0315 16.8269 14.9626 16.9538C14.9026 17.0642 14.796 17.1417 14.6724 17.1646C14.5304 17.1909 14.3383 17.0899 13.9541 16.8879L10.3102 14.9716C10.1966 14.9119 10.1398 14.882 10.08 14.8703C10.0271 14.8599 9.97262 14.8599 9.91966 14.8703C9.85986 14.882 9.80309 14.9119 9.68955 14.9716L6.04561 16.8879C5.66143 17.0899 5.46935 17.1909 5.32731 17.1646C5.20374 17.1417 5.09711 17.0642 5.03712 16.9538C4.96817 16.8269 5.00486 16.6129 5.07823 16.1851L5.77391 12.129C5.7956 12.0025 5.80644 11.9393 5.7991 11.8788C5.79261 11.8252 5.77576 11.7734 5.74951 11.7263C5.71986 11.673 5.6739 11.6282 5.58199 11.5387L2.63364 8.66702C2.32289 8.36436 2.16752 8.21302 2.14861 8.06985C2.13216 7.94529 2.1728 7.81995 2.25921 7.72874C2.35853 7.6239 2.57315 7.59253 3.00237 7.5298L7.07843 6.93402C7.20519 6.91549 7.26857 6.90623 7.32377 6.88056C7.37264 6.85783 7.41664 6.82584 7.45332 6.78635C7.49476 6.74176 7.52311 6.68432 7.57982 6.56944L9.40205 2.8778Z" stroke="#636465" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;
  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}>
      <div className="sidebar-top">
        <Link to='https://mixicoin.com' className="sidebar-brand">
          <img src={siteLogo} />
        </Link>
        
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li disabled>
              <Link className="menu-link">
                <span className='menu-link-icon'>
                  {gameIcon}
                </span>
                <span className='menu-link-text'> Games </span>
              </Link> 
            </li>
            <li className={`menu-item ${activeMenuItem === "staking" ? "active" : ""}`}>
              <Link to="staking" className="menu-link"  onClick={() => handleMenuClick("staking")}>
                <span className='menu-link-icon'>
                  {stakingIcon}
                </span>
                <span className='menu-link-text'> Staking </span>
              </Link> 
            </li>
            <li disabled>
              <Link className="menu-link">
                <span className='menu-link-icon'>
                  {affiliateIcon}
                </span>
                <span className='menu-link-text'> Affiliate </span>
              </Link> 
            </li>
          </ul>
          <a href="https://www.t.me/mixicoin.com/" className='inline_btn' target='_blank'> 
            <span><img src={telegramIcon} alt="" /></span> Join the Telegram
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
