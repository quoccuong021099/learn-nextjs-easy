import Link from 'next/link'
import * as React from 'react'
import { LayoutProps } from '../../models/common'

// export interface AdminLayoutProps {}

export default function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>AdminLayout</h1>

      <div>Sidebar</div>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>

      <div>Footer</div>
    </div>
  )
}
