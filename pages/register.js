import React from 'react'
import Register from '../components/auth/Register'
import Layout from '../components/Layout'


export default function register() {
  return (
    <Layout title="Register" bg="/img/bg-register.jpg">
      <Register />
    </Layout>
  )
}
