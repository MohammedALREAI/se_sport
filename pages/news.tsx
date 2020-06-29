import Link from "next/link";
import MainNews from "../components/MainNews";

import useShell from "../components/Shell";
const News = () => {
  return (
    <div>
      <MainNews
        news={{
          title: "new information on the rabbinism six  lexical session",
          excerpt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum aliquam nam tempore, libero illo veritatis laboriosam in? Sint at placeat, vitae corporis obcaecati explicabo sit labore voluptatem exercitationem? Voluptatibus.",
          data: new Date(),
          slug: " new information pre-lesion",
        }}
      />
    </div>
  );
};

export default useShell(News);
