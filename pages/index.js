import Container from '../components/container'
import Portfolio from '../components/portfolio'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME, PORTFOLIO } from '../lib/constants'

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
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
