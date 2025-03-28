import React, { FC } from "react";
import { Logo } from "../Logo";
import { Navigation } from "./Navigation";

export const Header: FC = () => (
  <header className="fixed top-0 z-10 w-full rounded-b-2xl border border-gray-400 bg-white py-4 md:px-4">
    <div className="container flex items-center justify-between">
      <Logo />
      <Navigation />
    </div>
  </header>
);
