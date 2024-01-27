import React from "react"
import { CompanyServiceProps } from "../../model/Services"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const CompanyServiceDetail = ({service}: {service: CompanyServiceProps}) => {

  const serviceImage = getImage(service.imagePath)

  return (
    <div className="flex w-screen justify-between">
      <div className="prose flex flex-col justify-start items-center">
        <h2 className="w-full">{service.name}</h2>
        <p>{service.description}</p>
      </div>
      <div className="w-1/3 flex justify-between items-center">
        <GatsbyImage image={serviceImage} alt="" />
      </div>

    </div>
  )
}
