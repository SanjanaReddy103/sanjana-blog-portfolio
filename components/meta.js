import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL, PORTFOLIO } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      /> */}
      <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon"/>
      <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon"/>
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#72B340" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`${PORTFOLIO.PERSONAL.NAME.FNAME} ${PORTFOLIO.PERSONAL.NAME.LNAME} | Blog | Profile | Portfolio`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
