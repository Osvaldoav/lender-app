import React from 'react'
import './NavBar.scss'

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = () => {
    return (
      <div className="navbar">
        <h2>Lender App</h2>
      </div>
    );
}