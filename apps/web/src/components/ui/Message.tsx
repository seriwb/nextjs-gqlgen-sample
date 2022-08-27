import { useEffect, useState } from 'react';

type Props = {
  message: string;
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  dismissible?: boolean; // 閉じるボタンの表示オプション
};

/**
 * メッセージがあれば、アラートタグを表示する
 */
export const Message = ({ message, color, dismissible }: Props) => {
  const [visible, setVisible] = useState(message ? true : false);
  useEffect(() => {
    console.log(message);
    setVisible(message ? true : false);
  }, [message]);

  return (
    <>
      {visible &&
        (dismissible ? (
          <div color={color} onClick={() => setVisible(false)}>
            {message}
            <div>x</div>
          </div>
        ) : (
          <div color={color}>{message}</div>
        ))}
    </>
  );
};
