import { PORTFOLIO } from '../lib/constants'

export default function Footer() {
  return (
    <div className='py-10 w-full float-left border-t-2 border-green-500 border-dashed'>
      <div className="container px-4 flex justify-between items-end">
        <p className="text-green-700 font-sans">
          &copy; {new Date().getFullYear()} | All Rights Reserved. <br />
          {PORTFOLIO.FOOTER.PRODUCTION_NAME}
        </p>
        <a href={PORTFOLIO.FOOTER.STUDIO_LINK} target='_blank' className='text-blue-500 underline text-sm'>Studio</a>
      </div>
    </div>
  )
}
