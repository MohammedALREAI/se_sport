import React from "react";
import Link from "next/link";
import logo from "./logo.svg";

const linksNav = [
  {
    title: "news",
    link: "/news",
  },
  {
    title: "about",
    link: "/about",
  },
  {
    title: "Events",
    link: "/events",
  },
];

type LikesProps = {
  href: string;
  children: any;
};
const LinkMenus: React.FC<LikesProps> = (props) => (
  <Link href={props.href}>
    <a>{...props.children}</a>
  </Link>
);
const Header: React.FC = () => {
  return (
    <>
      <div className="flex w-full h-12 bg-blue-900 space-x-3 capitalize justify-start items-center pl-2">
        <img src={logo} alt="logo" />
        {linksNav.map((item) => (
          <LinkMenus href={item.link}>{item.title}</LinkMenus>
        ))}
      </div>
      <div className="flex justify-center w-full bg-gray-3000 py-1">
        <img src={logo} alt="logo item" />
      </div>
    </>
  );
};
export default Header;
