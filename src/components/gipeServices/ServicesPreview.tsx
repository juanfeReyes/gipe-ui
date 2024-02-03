import { Link } from "gatsby";
import React from "react";
import { useSpringCarousel } from "react-spring-carousel";
import { GrFormPrevious } from "@react-icons/all-files/gr/GrFormPrevious";
import { GrFormNext } from "@react-icons/all-files/gr/GrFormNext";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CompanyServiceProps, ServiceBranchProps } from "../../model/Services";
import { getAllServices } from "../../query/ServicesQuery";
import { useMediaQuery } from "react-responsive";
import { mobileResponsiveConfig } from "../shared/layout/Responsive";

const ViewMoreServices = ({ servicePath }: { servicePath: string }) => (
  <Link to={`services/${servicePath}`} className="flex gap-1 items-center font-medium">
    <FaPlus /> Ver mas
  </Link>
);

const CompanyService = ({
  companyService,
}: {
  companyService: CompanyServiceProps;
}) => {
  const companyImage = getImage(companyService.imagePath);

  return (
    <div className="rounded-xl h-full shadow-xl m-3 flex flex-col items-center border-2">
      <div className="m-2 flex flex-row justify-start items-start">
        <h4 className="text-lg font-bold">{companyService.title}</h4>
      </div>
      <GatsbyImage image={companyImage} alt="" className="aspect-video w-full max-h-fit"/>
      <p className="m-4 font-light text-justify">{companyService.summary}</p>
    </div>
  );
};

const BranchSummary = ({
  serviceBranch,
}: {
  serviceBranch: ServiceBranchProps;
}) => {
  const serviceBranchImage = getImage(serviceBranch.imagePath);

  return (
    <div className="flex flex-col justify-evenly items-center h-full">
      <GatsbyImage image={serviceBranchImage} alt="" />
      <p className="text-center">{serviceBranch.description}</p>
      <div className="w-full flex justify-end">
        <ViewMoreServices servicePath={serviceBranch.title} />
      </div>
    </div>
  );
};

const ServiceBranch = ({
  serviceBranch,
}: {
  serviceBranch: ServiceBranchProps;
}) => {
  const isMobile = useMediaQuery(mobileResponsiveConfig)
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      itemsPerSlide: isMobile ? 1 : 2,
      gutter: 24,
      items: serviceBranch.services.map((service) => ({
        id: service.title,
        renderItem: <CompanyService companyService={service} />,
      })),
    });

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">{serviceBranch.title}</h3>
        <div className="flex gap-10">
          <div className="flex items-center justify-center gap-4 text-2xl">
            <button onClick={slideToPrevItem}>
              <GrFormPrevious />
            </button>
            <button onClick={slideToNextItem}>
              <GrFormNext />
            </button>
          </div>
          <ViewMoreServices servicePath={serviceBranch.title} />
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-10 bg-background">
        <div className="md:w-1/3">
          <BranchSummary serviceBranch={serviceBranch} />
        </div>
        <div className="md:w-2/3 flex grow basis-0 z-20 overflow-hidden pb-10">
          {carouselFragment}
        </div>
      </div>
    </>
  );
};

export const ServicesPreview = () => {
  const data = getAllServices();

  return (
    <div className="bg-surface p-5">
      <h2 className="py-2">Servicios</h2>
      <div className="flex flex-col gap-10">
        {data.map((node: ServiceBranchProps) => (
          <div className="w-full">
            <ServiceBranch serviceBranch={node} />
          </div>
        ))}
      </div>
    </div>
  );
};
