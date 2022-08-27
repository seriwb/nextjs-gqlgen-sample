import { BeatLoader } from "react-spinners";

type Props = {
  isDirty: boolean;
  isSubmitting: boolean;
};

export const SaveButton = ({ isDirty, isSubmitting }: Props) => {
  return isSubmitting ? (
    <button type='submit' color='success' disabled>
      <BeatLoader />
      <label style={{marginLeft: "10px"}}>保存中</label>
    </button>
  ) : (
    <button type='submit' color='success' disabled={!isDirty}>
      保存
    </button>
  );
};
