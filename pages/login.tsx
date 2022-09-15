import * as React from 'react'
import { authApi } from '../api-client/auth-api'

export default function LoginPage() {
  const handleLoginClick = async () => {
    try {
      await authApi.login({ username: 'cuong', password: '123asd' })
    } catch (error) {
      console.log('failed to login - ', error)
    }
  }
  const handleGetProfileClick = async () => {
    try {
      await authApi.getProfile()
    } catch (error) {
      console.log('failed to getProfile - ', error)
    }
  }
  const handleLogoutClick = async () => {
    try {
      await authApi.logout()
    } catch (error) {
      console.log('failed to logout - ', error)
    }
  }
  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}
