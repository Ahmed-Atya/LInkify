import React from 'react'
import TopBar from "../../components/topBar/TopBar"
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import './home.css'
const Home = () => {
  return (
    <>
      <TopBar/>
      <div className='home'>
        <SideBar/>
        <Feed/>
        <RightBar/>
      </div>
    </>
  )
}

export default Home
