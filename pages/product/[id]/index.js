import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();
  const  aa = router.query;
  //const { pid, slug } = router.query;

  return <p>My Blog Post: {JSON.stringify(aa)}</p>;
};

export default Product;