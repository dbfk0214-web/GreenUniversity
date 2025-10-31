import React from 'react'

const Header = ({children}) => {
  return (
    <div className="w-full bg-gray-900 h-[30%] border-red-500">{children}</div>
  )
}

export default Header