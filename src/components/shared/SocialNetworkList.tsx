import React from "react"
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'

/**
 * TODOs
 *  Increase icon size
 *  Add circle outline
 *  Improve spacing
 *  Add links to the pages
 */

export const SocialNetworkList = () => {

  const socialNetworks = [
    {
      icon: <FaWhatsapp />,
      link: 'TODO'
    },
    {
      icon: <FaInstagram />,
      link: 'TODO'
    },
    {
      icon: <FaFacebookF />,
      link: 'TODO'
    },
  ]

  return (<div>
    {
      socialNetworks.map(net => (
        <a href={net.link}>{net.icon}</a>
      ))
    }
  </div>)
}
