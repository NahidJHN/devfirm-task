import {
  BiHomeAlt,
  BiPhoneCall,
  BiFile,
  BiMessageRoundedDetail,
} from "react-icons/bi";
import { LuLuggage, LuLogOut, LuContact } from "react-icons/lu";
import { BsAirplane, BsFolder, BsGear } from "react-icons/bs";

import { PiWine, PiUsersThree, PiUsersFour } from "react-icons/pi";

interface ISideBarData {
  title: string;
  path?: string;
  icon: React.ReactNode;
  hasChildren: boolean;
  children?: ISideBarData[];
  parent?: string;
}

export const sideBarData: ISideBarData[] = [
  {
    title: "Dashboard",
    path: "/",
    icon: <BiHomeAlt className="text-xl" />,
    hasChildren: false,
  },
  {
    title: "reservation",
    icon: <BiPhoneCall className="text-xl" />,
    hasChildren: true,
    parent: "reservation",
    children: [
      {
        title: "Home",
        path: "/",
        icon: <BiPhoneCall className="text-xl" />,
        hasChildren: false,
      },
    ],
  },
  {
    title: "Tips",
    path: "/tips",
    icon: <LuLuggage className="text-xl" />,
    hasChildren: true,
    parent: "tips",
    children: [
      {
        title: "Home",
        path: "/",
        icon: <BiPhoneCall className="text-xl" />,
        hasChildren: false,
      },
    ],
  },
  {
    title: "Invoices",
    path: "/invoices",
    icon: <BiFile className="text-xl" />,
    hasChildren: false,
  },
  {
    title: "Planes",
    path: "/planes",
    icon: <BsAirplane className="text-xl" />,
    hasChildren: true,
    parent: "planes",
    children: [
      {
        title: "Home",
        path: "/",
        icon: <BiPhoneCall className="text-xl" />,
        hasChildren: false,
      },
    ],
  },
  {
    title: "Amenities",
    path: "/amenities",
    icon: <PiWine className="text-2xl" />,
    hasChildren: true,
    parent: "amenities",
    children: [
      {
        title: "Home",
        path: "/",
        icon: <BiPhoneCall className="text-xl" />,
        hasChildren: false,
      },
    ],
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: <LuContact className="text-xl" />,
    hasChildren: false,
  },
  {
    title: "Team",
    path: "/team",
    icon: <PiUsersThree className="text-xl" />,
    hasChildren: false,
  },
  {
    title: "Crew",
    path: "/crew",
    icon: <PiUsersFour className="text-xl" />,
    hasChildren: false,
  },
  {
    title: "files",
    path: "/files",
    icon: <BsFolder className="text-lg" />,
    hasChildren: false,
  },
  {
    title: "messages",
    path: "/messages",
    icon: <BiMessageRoundedDetail className="text-xl" />,
    hasChildren: false,
  },
  {
    title: "settings",
    path: "/settings",
    icon: <BsGear className="text-xl" />,
    hasChildren: false,
  },
  {
    title: "logout",
    path: "/logout",
    icon: <LuLogOut className="text-xl" />,
    hasChildren: false,
  },
];
