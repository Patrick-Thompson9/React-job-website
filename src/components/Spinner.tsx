import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

interface SpinnerProps {
  loading: boolean;
}

function Spinner({ loading }: SpinnerProps) {
  return (
    <ClipLoader
      color="blue"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Spinner;
