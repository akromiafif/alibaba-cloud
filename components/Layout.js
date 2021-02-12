import React from 'react'
import Head from 'next/head'


function Layout(props) {
    return (
      <div className="layout">
        <Head>
          <title>{props.title}</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
        </Head>
        {props.children}

        <style jsx>
          {`
            .layout {
              background-image: url(${props.bg});
              background-position: center;
              background-repeat: no-repeat; 
              background-size: cover;
              position: relative;
              height: 100vh;
              overflow-y: scroll;
            }
          `}
        </style>
      </div>
    )
}

export default Layout
