import React from "react";
import { ServiceBranchProps } from "../../model/Services";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const ServiceBranchHeader = ({
  serviceBranch,
}: {
  serviceBranch: ServiceBranchProps;
}) => {
  const serviceBranchImage = getImage(serviceBranch.imagePath);

  return (
    <div className="flex justify-evenly items-star">
      <GatsbyImage className="w-1/3" image={serviceBranchImage} alt="" />
      <div className="w-2/3 flex justify-center items-center">
        <h1 className="text-5xl">{serviceBranch.title}</h1>
      </div>
    </div>
  );
};
