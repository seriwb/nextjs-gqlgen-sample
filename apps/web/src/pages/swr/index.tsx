import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './style.module.css';
import { Layout } from 'components/layouts/default';
import { ItemList } from 'components/ui/ItemList';

const SWRPage: NextPage = () => {
  let data: any[] = []; // TODO
  return (
    <Layout title='SWR Sample'>
      <ItemList items={data} />
    </Layout>
  );
};

export default SWRPage;
