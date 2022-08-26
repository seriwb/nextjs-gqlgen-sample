import Head from 'next/head';
import { Footer } from './Footer';
import styles from './style.module.css';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export const Layout = ({ children, title = 'Sample Application', description = '' }: Props) => (
  <>
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
      </Head>

      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  </>
);
