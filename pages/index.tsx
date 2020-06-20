import React from "react";
import { getAllNews } from "../lib/newsFeather";
type TabSelections = "LATAM LEAGUE" | "BRAZIL" | "MEXICO" | "SOUNDES";

interface TabsHeaderProps {
  setTabSelection: (tab: TabSelections) => void;
  tabSelection: TabSelections;
}
const TabsHeader: React.FC<TabsHeaderProps> = (props) => (
  <ul className="flex border-b space-x-3">
    <li className="mr-1">
      <a
        className={`bg-white inline-block  py-2 text-blue-700 font-semibold ${
          props.tabSelection === "LATAM LEAGUE"
            ? "border-l border-t border-r rounded-t text-red-900"
            : ""
        }`}>
        LATAM LEAGUE
      </a>
    </li>
    <li className="mr-1">
      <a
        className={`bg-white inline-block  py-2 text-blue-700 font-semibold ${
          props.tabSelection === "BRAZIL"
            ? "border-l border-t border-r rounded-t text-red-900"
            : ""
        }`}>
        BRAZIL
      </a>
    </li>
    <li className="mr-1">
      <a
        className={`bg-white inline-block  py-2 text-blue-700 font-semibold ${
          props.tabSelection === "MEXICO"
            ? "border-l border-t border-r rounded-t text-red-900"
            : ""
        }`}>
        MEXICO
      </a>
    </li>

    <li className="mr-1">
      <a
        className={`bg-white inline-block  py-2 text-blue-700 font-semibold ${
          props.tabSelection === "SOUNDES"
            ? "border-l border-t border-r rounded-t text-red-900"
            : ""
        }`}>
        SOUNDES
      </a>
    </li>
  </ul>
);

const Home = ({ allNews }: { allNews: any[] }) => {
  const [tabSelection, setTabSelection] = React.useState<TabSelections>(
    "LATAM LEAGUE"
  );
  return (
    <>
      <TabsHeader
        setTabSelection={(tab: TabSelections) => setTabSelection(tab)}
        tabSelection={tabSelection}
      />
      {/* iff */}
      {(() => {
        switch (tabSelection) {
          case "LATAM LEAGUE":
            return "SOME TEXT";
            break;
          case "BRAZIL":
            break;
          case "MEXICO":
            break;
          case "SOUNDES":
            break;

          default:
            break;
        }
      })()}
      {allNews.map((i) => i.slug).join(" ")}
    </>
  );
};
export async function getStaticProps() {
  const allNews = getAllNews(["title", "slug"]);
  return {
    props: { allNews },
  };
}
