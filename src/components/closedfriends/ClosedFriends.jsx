import React from 'react'
import './closedfriends.css'
const ClosedFriends = ({user}) => {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default ClosedFriends
