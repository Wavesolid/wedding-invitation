import styles from '../styles/Index.module.css';
import Cover from '../components/Cover/Cover';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { useRouter } from "next/router";
import { useEffect } from 'react';

export default function index()
{
  const router = useRouter();
  console.log(router.pathname)
  useEffect(() => {
    if(router.pathname === '/') {
      router.replace('/home');
    }
  })
  return (
      <div className={styles.columnMain}>
        <Cover/>
      </div>
  );
}

index.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Banner />
        {page}
      </Layout>
    )
}