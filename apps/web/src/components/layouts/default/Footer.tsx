import { useMemo } from 'react';
import styles from './style.module.css';

export const Footer = () => {
  return useMemo(
    () => (
      <>
        <footer className={styles.footer}></footer>
      </>
    ),
    [],
  );
};
