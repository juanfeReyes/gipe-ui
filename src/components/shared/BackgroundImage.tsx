import React, { ReactElement } from "react";

export const BackgroundImage = ({
  image,
  content,
}: {
  image: ReactElement;
  content: ReactElement;
}) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 h-full">
      <div className="col-span-full row-span-full justify-center items-center">{image}</div>
      <div
        className={`bg-black relative col-span-full row-span-full opacity-25`}
      ></div>
      <div className="text-background relative grid col-span-full row-span-full">
        {content}
      </div>
    </div>
  );
};
