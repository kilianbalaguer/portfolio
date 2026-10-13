import React from "react";

type SectionHeadingProps = {
  index: string;
  children: React.ReactNode;
};

export default function SectionHeading({ index, children }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-end gap-4 sm:mb-14">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{children}</h2>
      <span className="mb-3 hidden h-px flex-1 bg-gradient-to-r from-white/15 to-transparent sm:block rtl:bg-gradient-to-l" />
    </div>
  );
}
