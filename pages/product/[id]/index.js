import { useRouter } from 'next/router'
import Layout from './../../../Components/Layout'


const Product = () => {
  const router = useRouter()
  const aa = router.query
  // const { pid, slug } = router.query;

  return <Layout>My Blog Post: {JSON.stringify(aa)}</Layout>
}

export default Product
