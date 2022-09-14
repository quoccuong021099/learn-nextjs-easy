import * as React from 'react'
import { LayoutProps } from '../../models/common'

// export interface EmptyLayoutProps {}

export default function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>
}
