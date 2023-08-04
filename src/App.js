import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from "./components/Feed"
import RightSideBar from './components/RightSideBar'
import Navbar from './components/Navbar'

const App = () => {
  return (
      <div>
      {/* <Header /> */}
        <Navbar />
           <div className='flex w-full fixed  h-full justify-between overflow-x-hidden overflow-y-hidden'>
          <div className='md:w-[25%] '><Sidebar  /></div>
        <div className='w-full md:w-[50%]'><Feed /></div>
        <div className='w-[25%] hidden md:block'><RightSideBar /></div>
      </div>
         {/* Post */}
         {/* Rightbar */}
    </div>
  )
}

export default App