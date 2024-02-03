import React from "react"
import { CompanyLogo } from "./Logo"
import { SocialNetworkList } from "./SocialNetworkList"
import { ContactInformation } from "./ContactInformation"

export const Footer = () => {

  return (
    <div className="w-full flex flex-wrap justify-center  md:justify-between items-center bg-secondary p-5 gap-3">
      <CompanyLogo />

      <ContactInformation />

      <SocialNetworkList />
    </div>
  )
}
