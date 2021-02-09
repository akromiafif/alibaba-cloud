import React from 'react'

function Description({title, text, img}) {
  return (
    <div className="desc-item">
      <img src={img} />
      <div style={{position: "relative", top: "-0.3rem"}}>
        <p style={{fontSize: "1.4rem"}}>{title}</p>
        <p>{text}</p>
      </div>

      <style jsx>
        {`
          .desc-item {
            padding: 1rem;
            width: 17rem;
            height: 5rem;
            background-color: white;
            box-shadow: 10px 10px 10px  rgba(46, 54, 68, 0.2);
          }

          .desc-item img {
            width: 3rem;
            margin-right: 2rem;
          }

          .desc-item img, .desc-item div {
            display: inline-block;
          }
        `}
      </style>
  </div>
  )
}

export default Description
