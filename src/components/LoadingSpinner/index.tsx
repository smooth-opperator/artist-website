import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const LoadingSpinner: React.FC = () => (
  <ClipLoader color="#563d7c" loading={true} speedMultiplier={0.5} css={css`display: block; margin: 30px auto;`} size={150} />
);

export default LoadingSpinner;