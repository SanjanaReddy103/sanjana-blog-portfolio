import Head from 'next/head';

export default () => {
  return <>
      <Head>
        <link rel="stylesheet" href="/css/balloons.css" />
        <script src="https://cdn.jsdelivr.net/npm/@mojs/core"></script>
        <script src="/js/balloons.js"></script>
      </Head>
    </>
}