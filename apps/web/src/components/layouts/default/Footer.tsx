import { useMemo } from 'react';
import style from './style.module.css';
import { COPY_RIGHT, FOOTER_LINK } from '@/constants/application';

export const Footer = () => {
  return useMemo(
    () => (
      <footer className={style.footer}>
        <div className={style.text}>
          <a href={FOOTER_LINK} target='_blank' rel='noopener noreferrer'>
          <span>{COPY_RIGHT}</span>
          </a>
        </div>
      </footer>
    ),
    [],
  );
};
