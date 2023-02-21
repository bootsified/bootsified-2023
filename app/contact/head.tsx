import { SITE_URL } from '@/utils/constants'

import DefaultTags from '../default-tags'

const Head = () => {
  const title = 'Contact Me - John "Boots" Highland'
  const description =
    "Whether you're looking for a web developer, bass guitarist, or just want to say 'Hi!', please reach out!"
  const url = '/contact'

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
