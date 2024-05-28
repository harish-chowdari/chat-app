import React from 'react'
import Sidebar from '../../Components/SideBar.jsx/Sidebar'
import MessageContainer from '../../Components/MessageContainer/MessageContainer'

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow bg-gray-100 p-4">
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home