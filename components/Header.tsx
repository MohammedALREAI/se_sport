import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
// import Logo from '

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
  isActive?: boolean;
};
const LinkMenus: React.FC<LikesProps> = (props) => {
  const router = useRouter();

  return (
    <Link href={props.href}>
      <a
        className={` flex items-center mx-2 h-full px-4 ${
          router.pathname === props.href ? "bg-blue-700" : ""
        }`}
      >
        {...props.children}
      </a>
    </Link>
  );
};
const Header: React.FC = () => {
  return (
    <>
      <div className="flex w-full h-12 bg-blue-900 items-center space-x-3 capitalize justify-start  font-bold pl-2 text-2xl">
        <img
          src="../assets/Images/rainbow_logo.png"
          className="h-16 mr-2"
          alt="logo"
        />

        {linksNav.map((item) => (
          <LinkMenus href={item.link}>{item.title}</LinkMenus>
        ))}
      </div>
      <div className="flex justify-center w-full bg-gray-3000 py-1">
        <img src={Logo} alt="logo item" />
      </div>
    </>
  );
};
export default Header;
