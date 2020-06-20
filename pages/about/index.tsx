import React from "react";
import useSell from "../../components/Shell";
import Link from "next/link";

const index = () => {
  return (
    <h1>
      About{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </h1>
  );
};

export default useSell(index);
