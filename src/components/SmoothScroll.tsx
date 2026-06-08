"use client";

import ScrollProvider from "./ScrollProvider";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ScrollProvider>{children}</ScrollProvider>;
}
