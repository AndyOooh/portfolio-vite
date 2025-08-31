import { MdOutlineEmail } from 'react-icons/md'
import { RiLinkedinBoxLine, RiWhatsappLine } from 'react-icons/ri'

export const contactList = [
  {
    media: 'Email',
    icon: <MdOutlineEmail />,
    contact: 'andy@andyoee.dev',
    link: 'mailto:andy@andyoee.dev',
  },
  {
    media: 'LinkedIn',
    icon: <RiLinkedinBoxLine />,
    contact: 'andreas-oee',
    link: 'https://www.linkedin.com/in/andreas-oee/',
  },
  {
    media: 'WhatsApp',
    icon: <RiWhatsappLine />,
    contact: '+66 63 492 0201',
    link: 'https://wa.me/66634920201',
  },
]
