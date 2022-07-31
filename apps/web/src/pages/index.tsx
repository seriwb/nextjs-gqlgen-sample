import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './style.module.css';
import { Layout } from 'components/layouts/default';

const Home: NextPage = () => {
  return (
    <Layout title='Index' description='Next.js + gqlgen Application'>
      <h1 className={styles.title}>Next.js + gqlgen Application</h1>

      <p className={styles.description}>GraphQL Application sample.</p>

      <div className={styles.grid}>
        <Link href='/swr'>
          <a className={styles.card}>
            <h2>SWR Sample &rarr;</h2>
            <p>GraphQL Request by SWR</p>
          </a>
        </Link>
        <Link href='/relay'>
          <a className={styles.card}>
            <h2>React Relay Sample &rarr;</h2>
            <p>GraphQL Request by React Relay</p>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
