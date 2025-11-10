import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold capitalize bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent inline-block">
        {children}
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto mt-4" />
    </div>
  );
}
