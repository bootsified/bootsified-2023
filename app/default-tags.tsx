import { SITE_URL } from '@/utils/constants'

const DefaultTags = () => {
  return (
    <>
      {/* favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#B00075" />
      <meta name="apple-mobile-web-app-title" content="Boots!" />
      <meta name="application-name" content="Boots!" />
      <meta name="msapplication-TileColor" content="#B00075" />
      <meta name="theme-color" content="#B00075" />

      {/* open graph */}
      <meta property="og:site_name" content="Bootsified" />
      <meta property="og:locale" content="en-US" />
      <meta property="og:image:url" content={`${SITE_URL}/images/bootsified-seo.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />

      {/* twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:image" content={`${SITE_URL}/images/bootsified-seo.png`} />
    </>
  )
}

export default DefaultTags
