import React from 'react'
import ColorfullButton from '../ColorfullButton'


function Navbar() {
  return (
    <div className="navbar">
      <header>
        <img className="logo" src="/img/logo.svg" />
        <nav>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>STORY</li>
          </ul>
        </nav>
        <ColorfullButton mgTB="2rem" mgLR="0" pdTB="0.5rem" pdLR="1.5rem" txt="Login" link="/login" />
      </header>

      <style jsx>
        {`

          header {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          ul  {
            list-style: none;
            
          }
          
          nav li {
            display: inline-block;
            padding: 2rem;
            font-weight: bold;
            cursor: pointer;
          }

          nav li:hover {
            opacity: 0.5;
          }

          .logo {
            margin-right: auto;
            width: 3rem;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

export default Navbar
