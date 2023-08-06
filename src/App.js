import React from 'react'
import Sidebar from './components/Sidebar'
import Feed from "./components/Feed"
import RightSideBar from './components/RightSideBar'
import Navbar from './components/Navbar'

const App = () => {
  return (
      <div>
        <Navbar />
           <div className='flex w-full fixed  h-full justify-between overflow-x-hidden overflow-y-hidden'>
          <div className='md:w-[20%] '><Sidebar  /></div>
        <div className='w-full md:w-[55%]'><Feed /></div>
        <div className='w-[25%]  hidden md:block'><RightSideBar /></div>
      </div>
    </div>
  )
}

export default App