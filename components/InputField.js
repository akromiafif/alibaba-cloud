import React from 'react'


export default function InputField({label, type}) {
  return (
    <div className="inputField">
      <label>{label}</label>
      <input type={type}></input>

      <style jsx>
        {`
          input {
            width: 100%;
            padding: 0.5rem;
            border: none;
            color: white;
            border-radius: 0.5rem;

            background: transparent;
            backdrop-filter: blur(5px);
            box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
          }

          .inputField {
            //border: 1px solid red;
            width: 80%;
            margin: auto;
            text-align: left;
            margin-top: 0.5rem;
          }

          label {
            display: block;
            margin-bottom: 0.5rem;
            color: #332B36;
          }
        `}
      </style>
    </div>
  )
}
