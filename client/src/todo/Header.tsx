import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const Header: React.FC = () => (
  <h1 className="text-xl sm:text-2xl flex items-center gap-2 font-bold text-left mb-4">
    <FaRegCalendarAlt color="#91410c" />
    Note App
  </h1>
);

export default Header;
