import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { location } = router.query

  return <p>Post: {location}</p>
}

export default Post
