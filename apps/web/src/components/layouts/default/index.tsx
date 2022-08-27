import Head from 'next/head';
import useSWR from 'swr';
import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import style from './style.module.css';
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
      <div className={style.container}>
        <Head>
          <title>{title}</title>
          <link rel='icon' href='/favicon.ico' />
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content={description} />
        </Head>

        <div className={style.panel}>
          <Sidebar isOpen={isSidebarOpen} />
          <div className={style.mainPanel}>
            <div className={style.content}>
              <Header />
              <div className={style.divider} />
              <main className={style.main}>{children}</main>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
