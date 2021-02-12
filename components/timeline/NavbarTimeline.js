import React from 'react'
import Head from 'next/head'

function NavbarTimeline() {
    return (
      <div className="main container-fluid">
          <img src="/img/logo.svg" />
          <input placeholder="search"/>
          <div className="profile">
            <img src="/img/home.svg" />
            <img src="/img/logo-itb.png" />
          </div>
          
        <style jsx>
            {`
              .main {
                background-color: white;
                width: 100%;
                z-index: 1;
                position: fixed;
                padding: 1rem 6rem;
                text-align: center;
              }

              input {
                padding-left: 1rem;
              }

              img {
                width: 2rem;
              }

              .main h2, .main > img, .profile {
                display: inline-block;
                margin: 0 9rem;
                cursor: pointer;
              }

              .profile img {
                margin: 0 0.2rem;
              }
            `}
        </style>
      </div>
    )
}

export default NavbarTimeline
