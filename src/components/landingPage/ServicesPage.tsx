import { StaticImage } from "gatsby-plugin-image";
import React, { forwardRef } from "react";
import { Service } from "../../model/Services";
import { Slide } from "../Layout";

const title = "Servicios";
const imagePath = "../../images/services-page.jpg";
const services: Service[] = [
  {
    title: "Deteccion de incendios",
    subtitle: "Lorem ipsum dolor sit amet",
    icon: "",
    description: `Lorem ipsum dolor sit amet. Aut voluptas culpa et eligendi voluptatem a cumque internos in minus reprehenderit 33 temporibus accusamus qui doloremque rerum et voluptates cumque.`,
  },
  {
    title: "Red contra incendios",
    subtitle: "Lorem ipsum dolor sit amet",
    icon: "",
    description: `Et assumenda velit est voluptatum galisum ut nisi eius et omnis amet et maiores blanditiis est dolores voluptatum id labore obcaecati. A vero optio hic impedit officia est dignissimos fugit sit facilis ducimus?`,
  },
  {
    title: "Sistema electricos",
    subtitle: "Lorem ipsum dolor sit amet",
    icon: "",
    description: `Id quia voluptatem est maiores molestiae vel quisquam sint cum quibusdam enim qui neque amet hic sint animi ut neque commodi. Et aliquam consequuntur sed voluptas doloribus ut dolores dolorem et autem omnis aut omnis delectus. Rem tempora quos est similique commodi qui fugit tempora est eligendi fugiat nam perferendis sunt`,
  },
];

export const ServiceItem = ({ service }: { service: Service }) => {
  return (
    <div className="w-full">
      <div className="bg-surface p-2">
        <h3 className="pb-3 text-lg font-bold">{service.title}</h3>
        <p className="pb-1">{service.subtitle}</p>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export const ServicesPage = forwardRef((props, ref) => {
  return (
    <Slide>
      <div ref={ref} id="#services" className="p-3 bg-background">
        <h2>{title}</h2>
        <div className="flex">
          <div className="w-2/5 py-3">
            <StaticImage className="h-full" src={imagePath} alt="" />
          </div>
          <div className="w-3/5">
            <div className="flex flex-col gap-4 p-3">
              {services.map((service) => (
                <ServiceItem service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
});
