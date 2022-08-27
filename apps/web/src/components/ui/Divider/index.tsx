import style from './style.module.css';

type Props = {
  margin?: string;
};

export const Divider = (props: Props) => (
  <div className={style.container}>
    <div style={{ margin: props.margin }} className={style.divider}></div>
  </div>
);
