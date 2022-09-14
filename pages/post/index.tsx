import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import * as React from 'react'
import MainLayout from '../../components/layout/main'

export interface ListPostPageProps {
  listPost: any[]
}

export interface Post {
  id: string
  title: string
}

export default function ListPostPage({ listPost }: ListPostPageProps) {
  return (
    <div>
      <h1>Post List Page</h1>

      <ul>
        {listPost.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ListPostPageProps> = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const { data } = await res.json()
  return {
    props: {
      listPost: data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  }
}
