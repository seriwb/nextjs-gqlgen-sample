import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import style from './style.module.css';
import type { ApiResponseType, ResponseErrorType } from 'app/api';
import type { Item } from 'app/form';
import { Message } from '@/components/ui/Message';
import { SaveButton } from '@/components/ui/SaveButton';
import { TextInput } from '@/components/ui/forms/TextInput';

export const EditView = () => {
  const dummy: Item = {
    id: 0,
    name: 'dummy',
    image: 'image',
    createdAt: new Date('2022-08-27 10:00:00'),
    updatedAt: new Date('2022-08-27 10:00:00'),
  };
  const {
    data: item,
    mutate: setItem,
    isValidating,
  } = useSWR<Item>('getItemFromAPI', null, {
    fallbackData: dummy,
  });

  const [message, setMessage] = useState('');
  const [saveEnable, setSaveEnable] = useState(false);
  const [serverErrors, setServerErrors] = useState<ResponseErrorType[] | undefined>([]);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<Item>({ mode: 'onBlur' });

  const isDirtyForm = (name: keyof Item): boolean => {
    return checkDirty(item![name], watch(name));
  };
  const isDirtyName = isDirtyForm('name');
  const isDirtyImage = isDirtyForm('image');

  useEffect(() => {
    reset(item);
  }, [isValidating]);

  useEffect(() => {
    setSaveEnable(isDirtyName || isDirtyImage);
  }, [isDirtyName, isDirtyImage]);

  // Submitしたら、今表示しているメッセージは消し、完了後にメッセージを入れ直す
  useEffect(() => {
    if (isSubmitting) {
      setMessage('');
      return;
    }
    if (isSubmitSuccessful && !serverErrors?.length) {
      setMessage('保存しました。');
    }
  }, [isSubmitSuccessful, isSubmitting]);

  // 保存処理
  const updateData = handleSubmit(async (data: Item) => {
    setMessage('');
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = { image: data };
    // const res = await fetch(`/api/item/${data.id}`, {
    //   method: 'PUT',
    //   headers: headers,
    //   body: JSON.stringify(body),
    // });

    // const result: ApiResponseType<Item> = await res.json();
    // if (res.ok) {
    //   // form値を更新し、画面をリセット
    //   reset(result.data!);
    //   setSaveEnable(false);
    //   setServerErrors([]); // TODO: 将来的にはエラー（Warn）が含まれることもあるはずなので、そのときはこの処理を見直する
    // } else {
    //   // エラー処理
    //   setServerErrors(result.errors);
    // }
    setItem(data);
    setSaveEnable(false);
  });

  return (
    <>
      <div className={style.container}>
        {serverErrors?.map((error: ResponseErrorType, i) => (
          <Message key={i} message={error.message} color='danger' />
        ))}
        <Message message={message} color='success' dismissible={true} />
        <form onSubmit={updateData}>
          <div>
            <TextInput
              name='name'
              label='Name'
              placeholder='画像名'
              isDirty={isDirtyName}
              errorMessage={errors?.name?.message}
              register={register}
            />
          </div>
          <div>
            <TextInput
              name='image'
              label='Image'
              placeholder='https://'
              isDirty={isDirtyImage}
              errorMessage={errors?.image?.message}
              register={register}
            />
          </div>
          <div className='d-grid gap-2 col-2 mx-auto'>
            <SaveButton isDirty={saveEnable} isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </>
  );
};

function checkDirty<T>(before: T, after: T): boolean {
  if (before) {
    return before != after ? true : false;
  } else {
    return after ? true : false;
  }
}
