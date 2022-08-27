import { useMemo } from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import useSWR from 'swr';
import style from './style.module.css';
import { SIDEBAR } from '@/constants/statekeys';

export const Header = () => {
  const { data: isSidebarOpen, mutate: setSidebarOpen } = useSWR<boolean>(SIDEBAR, null);
  if (isSidebarOpen === undefined) {
    setSidebarOpen(true);
  }

  return useMemo(() => {
    const iconProps = { size: 60, color: '#aaa' };
    return (
      <div className={style.header}>
        <div
          onClick={() => {
            setSidebarOpen(!isSidebarOpen);
          }}
        >
          {isSidebarOpen ? (
            <AiOutlineMenuFold title={'close sidebar'} {...iconProps} />
          ) : (
            <AiOutlineMenuUnfold title={'open sidebar'} {...iconProps} />
          )}
        </div>
        <div className={style.title}>
          <h1 className={style.titleText}>Next.js + gqlgen Application</h1>
        </div>
      </div>
    );
  }, [isSidebarOpen, setSidebarOpen]);
};
