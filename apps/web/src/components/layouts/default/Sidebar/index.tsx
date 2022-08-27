import style from './style.module.css';

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.content}>
        <div className={style.header}>
          <h2 className={style.title}>Items</h2>
        </div>
        <div className={style.divider} />
        <div className={style.items}>
          <div className={style.item}>item1</div>
          <div className={style.item}>item2</div>
        </div>
      </div>
      <div className={style.divider} />
      <div className={style.footer}>
        <div className={style.text}>sidebar footer</div>
      </div>
    </div>
  );
};
