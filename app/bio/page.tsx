import React from 'react'
import Bio from '@components/Bio'

import { SITE_URL } from '@/utils/constants'

////////////////////////////////////////////////////////
// TODO: When they get their shit together, here you go:
////////////////////////////////////////////////////////

// const pageTitle = 'My Bio'
// const pageDescription = "Here's a little bit about me."
// const url = '/bio'

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

const BioPage = () => {
  return <Bio />
}

export default BioPage
