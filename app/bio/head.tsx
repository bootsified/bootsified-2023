import { SITE_URL } from '@/utils/constants'

import DefaultTags from '../default-tags'

const Head = () => {
  const title = 'My Bio - John "Boots" Highland'
  const description = "Here's a little bit about me."
  const url = '/bio'

  return (
    <>
      <DefaultTags />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* open graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE_URL}${url}`} />

      {/* twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={`${SITE_URL}${url}`} />
    </>
  )
}

export default Head
