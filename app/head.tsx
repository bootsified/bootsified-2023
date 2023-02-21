import Script from 'next/script'

import { SITE_URL } from '@/utils/constants'

import DefaultTags from './default-tags'

const Head = () => {
  const title = 'Web Development, Bass Guitar, and Much More - John "Boots" Highland'
  const description =
    'The online home for John "Boots" Highland - a Dallas-based bass guitarist, web developer, husband and father.'
  const url = ''

  return (
    <>
      <DefaultTags />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* open graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={SITE_URL} />

      {/* twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={`${SITE_URL}${url}`} />

      {/* GOOGLE ANALYTICS */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-QXQK9E9F9V"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QXQK9E9F9V');
          `,
        }}
      />
    </>
  )
}

export default Head
