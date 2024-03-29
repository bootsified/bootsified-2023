import { Gochi_Hand, IBM_Plex_Sans_Condensed } from 'next/font/google'

export const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  weight: ['600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

export const gochiHand = Gochi_Hand({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hand',
})

// Display font possibilities:
//	Bakbak_One
//	Lalezar
// Poppins - letter-spacing: -0.05em; weight: 600;
// Inter - letter-spacing: -0.05em; weight: 700;
// IBM Plex Sans - letter-spacing: -0.05em; weight: 700;
// Urbanist - letter-spacing: -0.025em; weight: 700;
