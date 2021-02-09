import React from 'react'
import Timeline from '../components/timeline/Timeline'


export default function timeline() {
  return (
    <div>
      <img className="background" src="/img/bg-timeline.jpg"/>
      <Timeline />
      <Timeline />
      <style jsx>
        {`
          .background {
            width: 100%;
            height: 100vh;
            position: absolute;
            z-index: -1;
            overflow-y: scroll;
            position: fixed;
        `}
      </style>
    </div>
  )
}
