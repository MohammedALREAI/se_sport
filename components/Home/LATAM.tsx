import * as React from "react";
type TNews = {
  image: string;
  title: string;
  alt: string;
  description: string;
};

function singleNews({ news }) {
  const descRef = React.useRef<HTMLParagraphElement>(null);
  const removeWord = () => {
    var element = descRef.current;
    var wordWrap = element.innerHTML.split(" ");
    while (element.scrollHeight > element.offsetHeight) {
      wordWrap.pop();
      element.innerHTML = wordWrap.join(" ") + "...👀👀";
    }
  };
  React.useEffect(() => {
    removeWord();
    window.addEventListener("resize", removeWord);
    return () => window.removeEventListener("resize", removeWord);
  }, []);
  return (
    <div className=" full w-full h-40 my-2  bg-gray-100 border-2 mx-4  border-gray-200">
      <img
        src={news.image}
        alt={news.alt}
        className="h-full mr-4 rounded border-2"
      />
      <div className="">
        <h1 className="h-16 overflow-hidden">{news.title}</h1>
        <p
          className="h-20 overflow-hidden "
          style={{ textOverflow: "ellipsis" }}
          ref={descRef}
        >
          {news.description}
        </p>
      </div>
    </div>
  );
}

const NewsElement = ({ allNews }: { allNews: any[] }) => {
  return (
    <>
      <h1 className="text-center">latest News</h1>
      <div>
        {allNews.map((item, index) => (
          <singleNews new={item} key={`index_${index}`} />
        ))}
      </div>
    </>
  );
};
const rankingData = [
  [
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
  ],
  [
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
  ],
  [
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
    { name: "some data", image: require("../../assets/Images"), scores: 500 },
  ],
];

const RankingTabs = (ranking) => {
  return (
    <div>
      <table>
        <tbody className="table-auto my-4 p-4 border-2 border-gray-200 w-full">
          {ranking.map((item, index) => (
            <tr
              className={index % 2 == 0 ? "bg-gray-100 hover:bg-gray-200" : ""}
              key={`${index}${item.name}`}
            >
              <td className="border-2 px-4 py-2"># {index + 1}</td>
              <td className="border-2 px-4 py-2">{item.name}</td>
              <td className="border-2 px-4 py-2">
                <img src={item.image} alt={item.name} />
              </td>
              <td className="border-2 px-4 py-2 w-12">{item.scores}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
type RankingTab = "CURRENT" | "NEXT" | "OVERALL";

const RankingElement = () => {
  const [selectedTab, SetSelectedTab] = React.useState<RankingTab>("CURRENT");
  return (
    <>
      <h1 className="text-center TEXT  cursor-pointer ">Ranking </h1>
      <div className="flex">
        <div
          className={` cursor-pointer px-4 border-l border-r border-t border-gray-200 ${
            selectedTab == "CURRENT" ? "bg-gray-200 hover-bg-gray-300" : ""
          }`}
          onClick={() => SetSelectedTab("CURRENT")}
        >
          current Stage
        </div>
        <div
          className={` cursor-pointer px-4 border-2 border-gray-200 ${
            selectedTab == "NEXT" ? "bg-gray-200 hover-bg-gray-300" : ""
          }`}
          onClick={() => SetSelectedTab("NEXT")}
        >
          {" "}
          next Stage
        </div>
        <div
          className={` cursor-pointer px-4 border-2 border-gray-200 ${
            selectedTab == "OVERALL" ? "bg-gray-200 hover-bg-gray-300" : ""
          }`}
          onClick={() => SetSelectedTab("OVERALL")}
        >
          overall
        </div>
      </div>
      <RankingTabs
        ranking={() => {
          switch (selectedTab) {
            case "CURRENT":
              return rankingData[0];
              break;
            case "NEXT":
              return rankingData[1];
              break;
            case "OVERALL":
              return rankingData[2];
              break;

            default:
              return rankingData[0];
              break;
          }
        }}
      />
    </>
  );
};

export const LATAM = ({ allNews }: { allNews: any[] }) => {
  return (
    <div className="flex flex-wrap-reverse container justify-around container mx-auto">
      <div className=" md:w-1/2 px-8 w-full">
        <NewsElement allNews={allNews} />
      </div>
      <div className=" w-full md:w-1/2 lg:w-full">
        <h1 className="text-center">Ranking</h1>
      </div>
    </div>
  );
};
