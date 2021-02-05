import React from 'react'
import Register from '../components/auth/Register'


export default function register() {
  return (
    <div>
      <img className="background" src="/img/bg-register.jpg"/>
      <Register />
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
