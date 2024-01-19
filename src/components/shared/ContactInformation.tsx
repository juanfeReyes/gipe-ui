import React from "react"
import {IoMailOutline} from '@react-icons/all-files/io5/IoMailOutline'
import {FaUserTie} from '@react-icons/all-files/fa/FaUserTie'

/**
 * TODOs
 * increase icon size
 * Improve spacing
 *  Get together the icon and the tet
 *  Separate more each contact information
 */

export const ContactInformation = () => {

  const contactInformation = [{
    icon: <IoMailOutline />,
    value: 'comercial@gipesas.com'
  },
  {
    icon: <FaUserTie />,
    value: '(57) 3042081668 - 602 4037917'
  }]

  return (<>
    <div className="flex flex-wrap gap-5 space-x-1 text-xl">
      {contactInformation.map(contact => (<>
        <div className="flex flex-wrap gap-0 space-x-2 items-center pb-5">
          <div className="text-2xl">
            {contact.icon}
          </div>
          <p>{contact.value}</p>
        </div>
      </>))}
    </div>
  </>)
}
