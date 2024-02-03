import React from "react"
import {IoMailOutline} from '@react-icons/all-files/io5/IoMailOutline'
import {FaUserTie} from '@react-icons/all-files/fa/FaUserTie'

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
    <div className="flex flex-wrap justify-center md:gap-5 md:text-xl">
      {contactInformation.map(contact => (<>
        <div className="flex flex-wrap gap-3 items-center">
          <div className="md:text-2xl">
            {contact.icon}
          </div>
          <p>{contact.value}</p>
        </div>
      </>))}
    </div>
  </>)
}
