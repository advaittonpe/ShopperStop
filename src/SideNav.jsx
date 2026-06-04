import React from 'react'

const SideNav = ({ isOpen }) => {
  return (
       <div
      className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white
      transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <ul className="p-5 space-y-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default SideNav