import React from "react";

const PageHeader = ({ title }) => {
  return (
    <>
      <div className="f-ai-c min-h-[30vh] w-screen justify-center bg-secondary-400 text-white">
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      </div>
      <div className="f-ai-c mx-auto my-10 w-fit flex-col justify-center gap-2">
        <span className="inline-block font-medium text-primary-400">WH-INTERNATIONAL</span>
        <h2 className="text-center text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="h-1 w-full rounded-full bg-primary-400"></div>
      </div>
    </>
  );
};

export default PageHeader;
