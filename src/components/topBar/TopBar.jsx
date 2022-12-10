import React from 'react'
import './top-bar.css'
import {Search,Person,Chat ,Notifications } from '@material-ui/icons';
const TopBar = () => {
  return (
    <div className='topbar'>
      <div className="left-topbar">
        <span className="logo">Linkify</span>
      </div>
      <div className="center-topbar">
         <div className="search-bar">
            <Search className='searchIcon'/>
            <input placeholder='Find a post or a friend' className='searchInput'/>
         </div>
      </div>
      <div className="right-topbar">
        <div className="top-bar-links">
            <span className="topbar-link">Home</span>
            <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
            <div className="topbar-icon-item">
                <Person className='icon'/>
                <span className="topbar-icon-badge">1</span>
            </div>
            <div className="topbar-icon-item">
                <Chat className='icon'/>
                <span className="topbar-icon-badge">4</span>
            </div>
            <div className="topbar-icon-item">
                <Notifications className='icon'/>
                <span className="topbar-icon-badge">6</span>
            </div>
            <img src="assets/person/1.jpg" alt="" className='topbar-img' />
        </div>
      </div>
    </div>
  )
}

export default TopBar
