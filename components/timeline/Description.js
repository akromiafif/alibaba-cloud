import React from 'react'

function Description({title, text, img}) {
  return (
    <div className="container desc-item">
      <div className="row">
        <div className="col-4">
          <img src={img} />
        </div>
        <div className="col-8">
          <p style={{fontSize: "1.4rem"}}>{title}</p>
          <p>{text}</p>
        </div>
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
          }
        `}
      </style>
  </div>
  )
}

export default Description
