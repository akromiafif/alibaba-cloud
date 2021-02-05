import React from 'react'
import ColorfullButton from '../ColorfullButton'
import InputField from '../InputField'
import Link from 'next/link'


export default function Login() {
  return (
    <div>
      <div className="form">
        <img className="profile" src="/img/profile.svg" />
        <InputField label="Username" type="text" />
        <InputField label="Password" type="password" />
        <ColorfullButton mgTB="1.5rem" mgLR="0" pdTB="0.5rem" pdLR="1.5rem" txt="Login" link="/login" />
        <Link href="/register"><a>Don't have an account ? Register.</a></Link> 
      </div>
      <style jsx>
        {`
          .profile {
            width: 10rem;
            margin: 4rem 0 1rem 0;
            display: inline-block;
          }
          
          .form {
            text-align: center;
            top: 3rem;
            margin: auto;
            width: 35%;
            height: 85vh;
            background: rgba(255,255,255, 0.2);
            padding: 0 3em 0 3em;
            border-radius: 2rem;
            position: relative;
            backdrop-filter: blur(40px);
            border: solid 2px transparent;
            background-clip: padding-box;
            box-shadow: 10px 10px 10px  rgba(46, 54, 68, 0.03);
          }

          a {
            display: block;
          }
        `}
      </style>
    </div>
  )
}
