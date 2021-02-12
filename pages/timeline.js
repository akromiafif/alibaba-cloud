import React from 'react'
import Timeline from '../components/timeline/Timeline'
import NavbarTimeline from '../components/timeline/NavbarTimeline'
import Layout from '../components/Layout'



export default function timeline() {
  return (
    <Layout title="Timeline" bg="/img/bg-timeline.jpg">
      <NavbarTimeline />
      <Timeline />
      <Timeline />
      <Timeline />
    </Layout>
  )
}
