import Link from 'next/link'
import React, { useEffect } from 'react'
import { LayoutProps } from '../../models/common'

// export interface MainLayoutProps {}

export default function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('component mount')
    return () => {
      console.log('component unmount')
    }
  }, [])

  return (
    <div>
      <h1>MainLayout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      {' - '}
      <Link href="/about">
        <a>About</a>
      </Link>
      {' - '}
      <Link href="/post">
        <a>Post</a>
      </Link>
      <div>{children}</div>
    </div>
  )
}
