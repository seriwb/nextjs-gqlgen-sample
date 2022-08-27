import Head from 'next/head';
import useSWR from 'swr';
import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styles from './style.module.css';
import { SIDEBAR } from '@/constants/statekeys';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export const Layout = ({ children, title = 'Sample Application', description = '' }: Props) => {
  const { data: isSidebarOpen } = useSWR<boolean>(SIDEBAR, null, {
    fallbackData: true,
  });

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <link rel='icon' href='/favicon.ico' />
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content={description} />
        </Head>

        <div className={styles.panel}>
          <Sidebar isOpen={isSidebarOpen} />
          <div className={styles.mainPanel}>
            <div className={styles.content}>
              <Header />
              <main className={styles.main}>{children}</main>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
