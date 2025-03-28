import React, { FC } from "react";
import { Logo } from "../Logo";
import { SocialMediaLinks } from "../SocialMediaLinks";

export const Footer: FC = () => (
  <footer className="w-full rounded-t-2xl border border-gray-400 bg-white py-4 md:p-6 md:px-4">
    <div className="container flex items-center justify-between">
      <Logo />
      <SocialMediaLinks />
    </div>
  </footer>
);
