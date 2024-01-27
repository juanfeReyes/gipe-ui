import React from "react";
import { ServiceBranchProps } from "../../model/Services";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const ServiceBranchHeader = ({
  serviceBranch,
}: {
  serviceBranch: ServiceBranchProps;
}) => {
  const serviceBranchImage = getImage(serviceBranch.imagePath)

  return (
    <div className="flex justify-evenly items-star h-full">
      <GatsbyImage image={serviceBranchImage} alt="" />
      <h1>{serviceBranch.name}</h1>
    </div>
  );
}

