import style from './style.module.css';
import type { UseFormRegister } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  isDirty?: boolean;
  errorMessage?: string;
  register: UseFormRegister<any>;
};

export const TextInput = ({ name, label, placeholder, required, disabled, isDirty, errorMessage, register }: Props) => {
  const MAX_LENGTH_255 = {
    maxLength: {
      value: 255,
      message: '255文字以内で入力してください',
    },
  };

  const validCondition = required
    ? {
        required: '必須項目です',
        ...MAX_LENGTH_255,
      }
    : {
        ...MAX_LENGTH_255,
      };

  // disableの指定がある場合は、バリデーションの表現を入れない
  return (
    <div className='mb-3'>
      <label className={style.label}>{label}</label>
      {!disabled ? (
        <input
          type='text'
          className={style.editableInput}
          placeholder={placeholder}
          required={required}
          // invalid={errorMessage ? true : false}
          // valid={isDirty}
          // 呼び出し元から型を渡そうとすると、nameの型解決ができない
          {...register(name, validCondition)}
        />
      ) : (
        <input
          type='text'
          className={style.disableInput}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          {...register(name)}
        />
      )}
      <span>{errorMessage}</span>
    </div>
  );
};
