import { Avatar } from '@mui/material'
import React from 'react'

const SidebarOptions = ({src,Icon,title}) => {
  return (
    <>
      <div className="flex gap-3 items-center mt-4 py-1 px-5 hover:bg-gray-200 hover:text-[#2381fa]">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <p className="font-semibold text-lg">{title}</p>
      </div>
    </>
  );
}

export default SidebarOptions