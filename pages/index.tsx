import * as React from "react";
import { getAllNews } from "../lib/newsFeather";
type TabSelections = "LATAM LEAGUE" | "BRAZIL" | "MEXICO" | "SOUNDES";

interface TabsHeaderProps {
  setTabSelection: (tab: TabSelections) => void;
  tabSelection: TabSelections;
}

const TabRectangle: React.FC<{}> = () => (
  <div
    id="tabRectangle"
    style={{
      width: "0px",
      height: "0px",
      borderLeft: "4px solid transparent",
      borderRight: " 4px solid transparent",
      borderTop: "4px solid blue ",
      position: "relative",
      top: "-12px",
      translate: "left 0.3s ease",
      visibility: "hidden",
    }}></div>
);
enum EnumTabs {
  T1 = "LATAM LEAGUE",
  T2 = "BRAZIL",
  T3 = "MEXICO",
  T4 = "SOUNDES",
}
interface TabsHeaderTabProps {
  onClick: () => void;
  isSelected: boolean;
}
const moveTab = (left: number) => {
  const leftSpace = Math.round(left);
  const itemRE = document.getElementById("tabRectangle");
  itemRE.style.visibility = "visible";
};
const TabsHeaderTab: React.FC<TabsHeaderTabProps> = (props) => {
  const MyRefs = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (props.isSelected) {
      const BoundingRect = ref1.current.getBoundingClientRect();
      moveTab(BoundingRect.left + BoundingRect.right / 2);
    }
  }, [props.isSelected]);
  return (
    <li
      ref={MyRefs}
      className="py-2 mx-4 text-lg sm:mx-8 lg:mx-14 sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font- capitalize cursor-pointer"
      onClick={props.onClick}>
      <a className={` ${props.isSelected ? " text-blue-700 font-semibold" : ""}`}>
        {props.children}
        {props.isSelected ? <TabRectangle /> : ""}
      </a>
    </li>
  );
};

const TabsArr = ["T1", "T2", "T3", "T4"];
const TabsHeader: React.FC<TabsHeaderProps> = (props) => (
  <ul className="flex border-b space-x-3 justify-center border-b text-gray-800">
    {TabsArr.map((item, index) => {
      <TabsHeaderTab
        onClick={() => props.setTabSelection(`EnumTabs.${item}` as EnumTabs)}
        isSelected={props.tabSelection === (`EnumTabs.${item}` as string)}>{`EnumTabs.${item}`}</TabsHeaderTab>;
    })}
  </ul>
);

const Home = ({ allNews }: { allNews: any[] }) => {
  const [tabSelection, setTabSelection] = React.useState<EnumTabs>(EnumTabs.T1);
  return (
    <>
      <TabsHeader setTabSelection={(tab: EnumTabs) => setTabSelection(tab)} tabSelection={tabSelection} />
      {/* iff */}
      {(() => {
        switch (tabSelection) {
          case EnumTabs.T1:
            return "SOME TEXT";
            break;
          case EnumTabs.T2:
            return "SOME TEXT";

            break;
          case EnumTabs.T3:
            return "SOME TEXT";

            break;
          case EnumTabs.T4:
            return "SOME TEXT";

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
