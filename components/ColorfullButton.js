import React from 'react'
import Link from 'next/link'


function ColorfullButton({pdTB, pdLR, txt, mgTB, mgLR, link}) {
  return (
    <div>
      <Link href={link}>
        <a>{txt}</a>
      </Link>
      
      <style jsx>
        {`
          div {
            padding: ${pdTB} ${pdLR} ${pdTB} ${pdLR};
            margin: ${mgTB} ${mgLR} ${mgTB} ${mgLR};
            color: black;
            border-radius: 0.5rem;
            background: rgba(255,255,255, 0.2);
            backdrop-filter: blur(40px);
            background-clip: padding-box;
            cursor: pointer;
            font-weight: bold;
            display: inline-block;
          }

          div:hover {
            background: rgba(0, 35, 56, 0.7);
            color: white;
          }
        `}
      </style>
    </div>
  )
}

export default ColorfullButton