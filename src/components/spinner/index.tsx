"use client";

import { ProgressBar } from "react-loader-spinner";

export default function Spinner() {
  return (
    <ProgressBar
      height={"120"}
      width={"120"}
      ariaLabel="Loading..."
      borderColor="#000"
      barColor="#C4DEE4"
    />
  );
}
