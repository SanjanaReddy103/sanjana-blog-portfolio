import { faGithubSquare, faInstagramSquare, faLinkedin, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export const EXAMPLE_PATH = 'sanjana-blog-portfolio'
export const CMS_NAME = 'Sanity'
export const CMS_URL = 'https://sanity.io/'
export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/**Sanjana**%20%7C%20Blog%20%7C%20Portfolio.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg&images=https%3A%2F%2Fsanjana.blog%2Fimages%2Fuser-1.png&widths=200&widths=400&heights=200&heights=400'

export const PORTFOLIO = {
  PERSONAL: {
    NAME: {
      FNAME: 'Sanjana',
      LNAME: 'Reddy',
    },
    DP_URI: 'images/user-1.png',
    TITLE: 'Financial Advisor / Software Engineer',
    DOB: '03-03-1995', //DD-MM-YYYY
  },
  BG_URI: 'images/cover_bg_4.jpg',
  SHOW_SM_LINKS: true,
  SM_LINKS: [
    // {
    //   LABEL: 'Twitter',
    //   URL: 'https://www.twitter.com/i_am_sanish',
    //   ICON_VALUE: faTwitterSquare,
    // },
    // {
    //   LABEL: 'Facebook',
    //   URL: 'https://www.facebook.com/sanishkr',
    //   ICON_VALUE: faFacebookSquare
    // },
    {
      LABEL: 'LinkedIn',
      URL: 'https://www.linkedin.com/in/sanjana-reddy-bb7bba127',
      ICON_VALUE: faLinkedin
    },
    {
      LABEL: 'Instagram',
      URL: 'https://www.instagram.com/sanjana.reddy01',
      ICON_VALUE: faInstagramSquare
    },
    {
      LABEL: 'Github',
      URL: 'https://github.com/SanjanaReddy103',
      ICON_VALUE: faGithubSquare
    }
  ],
  BLOGS: {
    HEADER: 'Blog Posts',
    EMPTY_MSG: 'I\'ll start writing soon.',
    MORE_HEADER_TEXT: 'More Stories',
    BLOG_PAGE_HEADER_TEXT: 'Blog | Sanjana',
  },
  FOOTER: {
    PRODUCTION_NAME: 'An SR Production',
    STUDIO_LINK: '/studio'
  }
}
