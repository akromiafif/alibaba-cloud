import React from 'react'
import Login from '../components/auth/Login'


export default function login() {
  return (
    <div>
      <img className="background" src="/img/bg-login.jpg"/>
      <Login />
      <style jsx>
        {`
          .background {
            width: 100%;
            height: 100vh;
            position: absolute;
            z-index: -1;
        `}
      </style>
    </div>
  )
}
