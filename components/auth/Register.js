import React from 'react'
import ColorfullButton from '../ColorfullButton'
import InputField from '../InputField'
import Link from 'next/link'


export default function Register() {
  return (
    <div>
      <div className="form">
        <img className="profile" src="/img/profile-register.svg" />
        <InputField label="Email" type="text" />
        <InputField label="Username" type="text" />
        <InputField label="Password" type="password" />
        <ColorfullButton mgTB="1rem" mgLR="0" pdTB="0.5rem" pdLR="1.5rem" txt="Register" link="/register" />
        <Link href="/login"><a>Already have an account ? Login.</a></Link> 
      </div>
      <style jsx>
        {`
          .profile {
            width: 10rem;
            margin: 3rem 0 1rem 0;
            display: inline-block;
          }
          
          .form {
            text-align: center;
            top: 2rem;
            margin: auto;
            width: 35%;
            height: 90vh;
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
