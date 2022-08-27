import { useMemo } from 'react';
import style from './style.module.css';

export const Header = () => {
  return useMemo(() => <h1 className={style.title}>Next.js + gqlgen Application</h1>, []);
};
