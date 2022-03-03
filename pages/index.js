import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import Container from '../components/container'
import Portfolio from '../components/portfolio'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME, PORTFOLIO } from '../lib/constants'

const dynamicComponents = {
  ReactFloatingBalloons: dynamic(
    () => import('../components/balloons'),
    { ssr: false }
  ),
};

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const [showRFB, setShowRFB] = useState(false);

  const RFB = dynamicComponents.ReactFloatingBalloons;
  useEffect(() => {
    CheckForRFB();
  }, []);
  const CheckForRFB = () => {
    const TDD = new Date().getDate();
    const TMM = new Date().getMonth() + 1;
    const {0: DD, 1: MM} = PORTFOLIO.PERSONAL.DOB.split('-');
    // alert(`TDD:${TDD}, TMM: ${TMM}, DD: ${DD}, MM:${MM}`);
    setShowRFB(parseInt(TDD) === parseInt(DD) && parseInt(TMM) === parseInt(MM));
  }

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{PORTFOLIO.PERSONAL.NAME.FNAME} {PORTFOLIO.PERSONAL.NAME.LNAME} | Blog | Profile | Portfolio</title>
        </Head>
        <Portfolio/>
        <Container>
          <Intro />
          {heroPost ? (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          ) : 
          <span 
            className='block text-center font-serif text-sm text-gray-700'
          >
            {PORTFOLIO.BLOGS.EMPTY_MSG}
          </span>
          }
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        {showRFB ? <RFB/> : null}
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}
