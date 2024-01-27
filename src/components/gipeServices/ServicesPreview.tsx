import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import { useSpringCarousel } from "react-spring-carousel";
import { GrFormPrevious } from "@react-icons/all-files/gr/GrFormPrevious";
import { GrFormNext } from "@react-icons/all-files/gr/GrFormNext";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { CompanyServiceProps, ServiceBranchProps } from "../../model/Services";
import { getAllServices } from "../../query/ServicesQuery";



const ViewMoreServices = ({ servicePath }: { servicePath: string }) => (
  <Link to={servicePath} className="flex gap-1 items-center">
    <FaPlus /> Ver mas
  </Link>
);

const CompanyService = ({
  companyService,
}: {
  companyService: CompanyServiceProps;
}) => {

  const companyImage = getImage(companyService.imagePath)

  return (
    <div className="prose rounded-xl h-full shadow-xl m-3 flex flex-col justify-between items-center">
      <div className="m-2 flex flex-row justify-start items-start">
        <h4>{companyService.name}</h4>
      </div>
      <GatsbyImage image={companyImage} alt="" />
      <p className="m-2">{companyService.summary}</p>
    </div>
  );
};

const BranchSummary = ({
  serviceBranch,
}: {
  serviceBranch: ServiceBranchProps;
}) => {

  const serviceBranchImage = getImage(serviceBranch.imagePath)

  return (
    <div className="flex flex-col justify-evenly items-center h-full">
      <GatsbyImage image={serviceBranchImage} alt="" />
      <p>{serviceBranch.description}</p>
      <ViewMoreServices servicePath={serviceBranch.servicePath} />
    </div>
  );
};

const ServiceBranch = ({
  serviceBranch,
}: {
  serviceBranch: ServiceBranchProps;
}) => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      itemsPerSlide: 2,
      gutter: 24,
      items: serviceBranch.services.map((service) => ({
        id: service.name,
        renderItem: <CompanyService companyService={service} />,
      })),
    });

  return (
    <div>
      <div className="flex justify-between py-2 ">
        <h3 className="text-2xl">{serviceBranch.name}</h3>
        <div className="flex items-center justify-center gap-4">
          <button onClick={slideToPrevItem}>
            <GrFormPrevious />
          </button>
          <button onClick={slideToNextItem}>
            <GrFormNext />
          </button>
        </div>
        <ViewMoreServices servicePath={serviceBranch.servicePath} />
      </div>
      <div className="flex flex-row">
        <div className="w-1/3 px-5">
          <BranchSummary serviceBranch={serviceBranch} />
        </div>
        <div className="w-2/3 flex grow basis-0 shrink z-50 overflow-hidden py-5">
          {carouselFragment}
        </div>
      </div>
    </div>
  );
};

export const ServicesPreview = () => {
  const data = getAllServices()

  return (
    <div className="">
      <h2 className="text-2xl font-bold p-2">Servicios</h2>
      <div className="flex flex-col">
        {data.allService.nodes.map((node: ServiceBranchProps) => (
          <div className="w-full py-5 px-2">
            <ServiceBranch serviceBranch={node} />
          </div>
        ))}
      </div>
    </div>
  );
};
