import React from "react";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";

export const SocialNetworkList = () => {
  const socialNetworks = [
    {
      icon: <FaWhatsapp />,
      link: "TODO",
    },
    {
      icon: <FaInstagram />,
      link: "TODO",
    },
    {
      icon: <FaFacebookF />,
      link: "TODO",
    },
  ];

  return (
    <div className="flex md:flex-col gap-2">
      {socialNetworks.map((net) => (
        <a className="md:text-xl rounded-full border-solid border-2 border-background p-2" href={net.link}>
          {net.icon}
        </a>
      ))}
    </div>
  );
};
