import { useEffect, useState } from 'react';
import style from './style.module.css';

type Props = {
  isOpen?: boolean;
};

export const Sidebar = (props: Props) => {
  const [sidebar, setSidebar] = useState(props.isOpen ? 'open' : 'close');
  useEffect(() => {
    setSidebar(props.isOpen ? 'open' : 'close');
  }, [props.isOpen]);

  return (
    <div className={style[`${sidebar}`]}>
      <div className={style.content}>
        <div className={style.header}>
          <h2 className={style.title}>Items</h2>
        </div>
        <div className={style.divider} />
        <div className={style.items}>
          <div className={style.item}>item1</div>
          <div className={style.item}>item2</div>
          <div className={style.item}>{sidebar}</div>
        </div>
      </div>
      <div className={style.divider} />
      <div className={style.footer}>
        <div className={style.text}>sidebar footer</div>
      </div>
    </div>
  );
};
