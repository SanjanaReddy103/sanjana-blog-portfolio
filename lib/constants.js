import { faGithubSquare, faInstagramSquare, faLinkedin, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export const EXAMPLE_PATH = 'cms-sanity'
export const CMS_NAME = 'Sanity'
export const CMS_URL = 'https://sanity.io/'
export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Sanish%20%7C%20Blog%20%7C%20Profile.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&images=https%3A%2F%2Fsanish.me%2Fimages%2Ficon-512x512.png'

export const PORTFOLIO = {
  PERSONAL: {
    NAME: {
      FNAME: 'Sanish',
      LNAME: 'Kumar',
    },
    DP_URI: 'images/user-1.jpg',
    TITLE: 'Software Engineer / Entrepreneur',
  },
  BG_URI: 'images/cover_bg_1.jpg',
  SHOW_SM_LINKS: true,
  SM_LINKS: [
    {
      LABEL: 'Twitter',
      URL: 'https://www.twitter.com/i_am_sanish',
      ICON_VALUE: faTwitterSquare,
    },
    {
      LABEL: 'Facebook',
      URL: 'https://www.facebook.com/sanishkr',
      ICON_VALUE: faFacebookSquare
    },
    {
      LABEL: 'LinkedIn',
      URL: 'https://www.linkedin.com/in/sanishkr',
      ICON_VALUE: faLinkedin
    },
    {
      LABEL: 'Instagram',
      URL: 'https://www.instagram.com/i_am_sanish',
      ICON_VALUE: faInstagramSquare
    },
    {
      LABEL: 'Github',
      URL: 'https://github.com/sanishkr/',
      ICON_VALUE: faGithubSquare
    }
  ],
  BLOGS: {
    HEADER: 'My Blogs',
    EMPTY_MSG: 'I\'ll start writing soon.',
    MORE_HEADER_TEXT: 'More Stories',
    BLOG_PAGE_HEADER_TEXT: 'Blog | Sanish',
  },
  FOOTER: {
    PRODUCTION_NAME: 'An SNS Production'
  }
}
