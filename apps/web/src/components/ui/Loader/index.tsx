import { BeatLoader } from "react-spinners";

export const Loader = () => {
  return (
    <BeatLoader
      cssOverride={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }}
    />
  );
};
