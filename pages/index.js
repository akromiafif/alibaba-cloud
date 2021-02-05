import React from 'react'
import Home from '../components/home/Home'


export default function index() {
  return (
    <div>
      <img className="background" src="/img/bg-3.jpg"/>
      <Home />

      <style jsx>
        {`
          .background {
            width: 100%;
            height: 100vh;
            position: absolute;
            z-index: -1;
          }
        `}
      </style>
    </div>
  )
}
