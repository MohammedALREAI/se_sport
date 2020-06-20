import Link from "next/link";

import useShell from "../components/Shell";
const News = () => {
  return (
    <h1>
      <Link href="/news">
        <a>News</a>
      </Link>
    </h1>
  );
};

export default useShell(News);
