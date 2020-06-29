import * as React from "react";
import { INews } from "../lib/news.d";
import { type } from "os";

type Props = INews;
function MainNews(news: INews) {
  const excerptRef = React.useRef<HTMLParagraphElement>(null);
  const titleRef = React.useRef<HTMLParagraphElement>(null);
  const UpdateText = () => {
    let ExcerptElement = excerptRef.current;
    let ExcerptElementWrap = ExcerptElement.innerHTML.split(" ");
    while (ExcerptElement.scrollHeight > ExcerptElement.offsetHeight) {
      ExcerptElementWrap.pop();
      ExcerptElement.innerHTML = ExcerptElementWrap.join(" ") + "...👀👀";
    }

    let TitleElement = titleRef.current;
    let TitleElementWrap = TitleElement.innerHTML.split(" ");
    while (TitleElement.scrollHeight > TitleElement.offsetHeight) {
      TitleElementWrap.pop();
      TitleElement.innerHTML = TitleElementWrap.join(" ") + "...👀👀";
    }
  };
  React.useEffect(() => {
    UpdateText();
    window.addEventListener("resize", UpdateText());
    return () => window.removeEventListener("resize", UpdateText());
  }, []);
  return;
  <div className="flex justify-center w-full bg-gray-400 py-12 h-64">
    <h1 className="uppercase text-center text-black font-extrabold mb-12">
      New & videos{" "}
    </h1>
    <div className="container mx-auto">
      <div className="bg-white w-full h-64 ">
        <div className="w-2/5 bg-white p-4 ">
          <h4 className="text-blue-500 font-bold mb-2 text-lg">
            {news.data.getDay()}-{news.data.getMonth() + 1}-
            {news.data.getFullYear()}
          </h4>
          <h1 className="text-black text-3xl uppercase font-bold leading-tight">
            {" "}
            {news.title}
          </h1>
          <p className="">{news.excerpt}</p>
          <div className="text-blue-200">read more ... {">>"} </div>
        </div>
        <div className="w-3/5"></div>
      </div>
    </div>
  </div>;
}
export default MainNews;
