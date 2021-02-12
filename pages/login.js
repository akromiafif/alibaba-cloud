import React from 'react'
import Login from '../components/auth/Login'
import Layout from '../components/Layout'


export default function login() {
  return (
    <Layout title="Register" bg="/img/bg-login.jpg">
      <Login />
    </Layout>
  )
}
