import React from 'react'
import ColorfullButton from '../ColorfullButton'
import Navbar from './Navbar'


export default function Home() {
  return (
    <div className="content">
      <Navbar />
      <div className="main">
        <img className="icon" src="/img/icon-4.svg" />
        
        <div className="txt-btn">
          <h2>When gotong royong means everything..</h2>
          <p>Find your cheapest loans in minutes then click to apply instantly. There is no interest rate. All you need is signup and find more people to join.</p>
          <ColorfullButton mgTB="2rem" mgLR="0" pdTB="0.5rem" pdLR="1.5rem" txt="Sign Up Now" link="/register" />
        </div>
      </div>
      <style jsx>
        {`
          .content {
            margin: auto;
            width: 90%;
            height: 100vh;
            background: rgba(255,255,255, 0.2);
            padding: 0 3em 0 3em;
            border-radius: 2em 2em 0 0;
            position: relative;
            backdrop-filter: blur(40px);
            border: solid 2px transparent;
            background-clip: padding-box;
            box-shadow: 10px 10px 10px  rgba(46, 54, 68, 0.03);
          }

          .main {
            margin-top: -2rem;
            width: 100%;
            height: 80vh;
          }


          .icon {
            width: 30rem;
            float: right;
            margin-right: 3rem;
          }

          .txt-btn {
            width: 50%;
            height: 50vh;
            margin-left: 3rem;
          }

          .txt-btn h2 {
            color: #002337;
            font-size: 3rem;
            margin-block-end: 0.4rem;
          }

          .txt-btn p {
            color: white;
            width: 80%;
            margin-block-start: 0;
            margin-block-end: 0;
          }
        `}
      </style>
    </div>
  )
}
