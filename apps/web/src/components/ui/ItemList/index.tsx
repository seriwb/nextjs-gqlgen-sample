import { Suspense } from 'react';
import style from './style.module.css';

export type Item = {
  title: string;
  description: string;
};

type Props = {
  items: Item[];
};

export const ItemList = (props: Props) => {
  return (
    <>
      <div className={style.header}>
        <div className={style.filter}></div>
      </div>
      <Suspense>
        <ContentsComponent/>
      </Suspense>
    </>
  );
};

const ContentsComponent = () => {
  return (
    <div className={style.contents}>
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
