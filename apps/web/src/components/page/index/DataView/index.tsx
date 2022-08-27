import Image from 'next/image';
import useSWR from 'swr';
import style from './style.module.css';
import type { Item } from 'app/form';
import logo from 'assets/images/vercel.svg';

export const DataView = () => {
  const dummy: Item = {
    id: 0,
    name: 'dummy',
    image: 'image',
    createdAt: new Date('2022-08-27 10:00:00'),
    updatedAt: new Date('2022-08-27 10:00:00'),
  };
  const { data: item } = useSWR<Item>('getItemFromAPI', null, {
    fallbackData: dummy,
  });
  return (
    <>
      <div className={style.view}>
        <h2>{item?.name}</h2>
        <Image src={logo} width={230} height={60} alt={'image'} />
        <p>GraphQL Request by SWR</p>
      </div>
    </>
  );
};
