import Link from 'next/link';
import style from './style.module.css';
import type { NextPage } from 'next';
import { Layout } from 'components/layouts/default';
import { APP_NAME } from 'constants/application';

const Home: NextPage = () => {
  return (
    <Layout title={APP_NAME} description='Sample application for using Next.js & gqlgen.'>
      <p className={style.description}>GraphQL Application sample.</p>

      <div className={style.grid}>
        <Link href='/swr'>
          <a className={style.card}>
            <h2>SWR Sample &rarr;</h2>
            <p>GraphQL Request by SWR</p>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
