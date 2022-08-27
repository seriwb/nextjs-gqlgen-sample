import { Suspense } from 'react';
import type { NextPage } from 'next';
import { Layout } from '@/components/layouts/default';
import { DataView } from '@/components/page/index/DataView';
import { EditView } from '@/components/page/index/EditView';
import { Divider } from '@/components/ui/Divider';
import { Loader } from '@/components/ui/Loader';
import { APP_NAME } from '@/constants/application';

const Home: NextPage = () => {
  return (
    <Layout title={APP_NAME} description='Sample application for using Next.js & gqlgen.'>
      <Suspense fallback={<Loader />}>
        <EditView />
        <Divider margin='20px 10px' />
        <DataView />
      </Suspense>
    </Layout>
  );
};

export default Home;
