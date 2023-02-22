import React from 'react'

import Contact from '@/components/Contact'
import ScrollUp from '@/components/ScrollUp/ScrollUp'
import { SITE_URL } from '@/utils/constants'

////////////////////////////////////////////////////////
// TODO: When they get their shit together, here you go:
////////////////////////////////////////////////////////

// const pageTitle = `Contact Me`
// const pageDescription =
//   "Whether you're looking for a web developer, bass guitarist, or just want to say 'Hi!', please reach out!"
// const url = '/contact'

// export const metadata = {
//   title: pageTitle,
//   description: pageDescription,
//   twitter: {
//     title: pageTitle,
//     description: pageDescription,
//     url: `${SITE_URL}${url}`,
//   },
//   openGraph: {
//     title: pageTitle,
//     description: pageDescription,
//     url: `${SITE_URL}${url}`,
//   },
// }

const ContactPage = () => {
  return (
    <>
      <ScrollUp />
      <Contact />
    </>
  )
}

export default ContactPage
