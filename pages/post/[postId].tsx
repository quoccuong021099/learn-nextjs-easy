import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import { useRouter } from 'next/dist/client/router'

export interface PostDetailProps {
  post: any
}

export default function PostDetailPage({ post }: PostDetailProps) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>
    )
  }

  if (!post) return null

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const { data } = await res.json()

  return {
    paths: data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PostDetailProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params?.postId
  if (!postId) return { notFound: true }

  const res = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  )
  const data = await res.json()
  return {
    props: {
      post: data,
    },
    revalidate: 60,
  }
}
