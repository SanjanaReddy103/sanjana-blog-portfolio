import { PORTFOLIO } from '../lib/constants'

export default function Footer() {
  return (
    <div className='py-10 w-full float-left border-t-2 border-green-500 border-dashed'>
      <div className="container px-4">
        <p className="text-green-700 font-sans">
          &copy; {new Date().getFullYear()} | All Rights Reserved. <br />
          {PORTFOLIO.FOOTER.PRODUCTION_NAME}
        </p>
      </div>
    </div>
  )
}
