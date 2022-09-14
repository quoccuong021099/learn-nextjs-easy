/* eslint-disable @next/next/no-typos */
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import MainLayout from '../components/layout/main'

const Header = dynamic(() => import('../components/common/header'), {
  ssr: true,
})

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [listPost, setListPost] = useState([])

  const router = useRouter()
  console.log('about query', router.query)
  const page = router.query?.page

  useEffect(() => {
    // if (!page) return
    ;(async () => {
      const res = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      )
      const { data } = await res.json()
      setListPost(data)
    })()
  }, [page])

  const handleNextPage = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: Number(page) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div>
      <h1>AboutPage</h1>
      <Header />
      {listPost?.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
      <button onClick={handleNextPage}>Next page</button>
    </div>
  )
}
AboutPage.Layout = MainLayout

export async function getStaticProps() {
  console.log('getStaticProps')
  return {
    props: {},
  }
}
