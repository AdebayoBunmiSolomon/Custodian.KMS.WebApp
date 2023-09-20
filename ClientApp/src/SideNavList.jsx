import React from "react";
import { FaMicroscope } from "react-icons/fa";
import { FaUniversalAccess } from "react-icons/fa";
import { BiSearchAlt, BiSolidBookContent } from "react-icons/bi";

export const createKnowledge = [
  {
    name: "Overview",
    path: "Overview",
    icon: <FaMicroscope />,
  },
  {
    name: "Permission",
    path: "Permission",
    icon: <FaUniversalAccess />,
  },
  {
    name: "Content",
    path: "Content",
    icon: <BiSolidBookContent />,
  },
];

export const searchKnowledge = [
  {
    name: "Search",
    path: "Search",
    icon: <BiSearchAlt />,
  },
];
