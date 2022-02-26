import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PORTFOLIO } from '../lib/constants'

export default function Portfolio() {
  return (
    <header
      className='portfolio-header h-screen-85'
      style={{ backgroundImage: `url(${PORTFOLIO.BG_URI})`}}
    >
      <div className='overlay absolute top-0 bottom-0 right-0 left-0'></div>
      <div className='w-full mx-auto px-4'>
        <div className='flex flex-col h-screen-85 justify-start md:pt-32 pt-12 items-center'>
          <div className="relative p-1 mx-auto mb-8 img-border">
            <div
              className="profile-thumb"
              style={{ background: `url(${PORTFOLIO.PERSONAL.DP_URI})` }}
            ></div>
          </div>
          <h1 className='text-4xl leading-5 text-white font-kaushan -rotate-6 m-0 p-0 mb-8 person-name font-light'>
            <span className='relative py-1 px-4'>{`${PORTFOLIO.PERSONAL.NAME.FNAME} ${PORTFOLIO.PERSONAL.NAME.LNAME}`}</span>
          </h1>
          <h3 className='text-white text-sm m-0 p-0 font-mono text-center leading-5 rotate-0'>
            <span>{PORTFOLIO.PERSONAL.TITLE}</span>
          </h3>
          <p className="mt-4"></p>
          <ul className="m-0 p-0 list-none rotate-0">
            {
              PORTFOLIO.SHOW_SM_LINKS ? PORTFOLIO.SM_LINKS.map(sm => <li className='m-0 p-0 list-none inline-block'>
              <a
                className="text-white inline-block px-3"
                href={sm.URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sm.LABEL}
              >
                <FontAwesomeIcon icon={sm.ICON_VALUE} className='text-3xl' />
              </a>
            </li>)
            : null
            }
          </ul>
        </div>
      </div>
    </header>
  )
}
