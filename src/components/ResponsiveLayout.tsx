"use client";

import { ReactNode } from "react";
import BottomNav from "./BottomNav";

export default function ResponsiveLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BottomNav />
      <div className="md:ml-[220px] lg:ml-[260px]">
        <div className="mx-auto max-w-[430px] md:max-w-none md:px-0 min-h-screen">
          {children}
        </div>
      </div>
    </>
  );
}
