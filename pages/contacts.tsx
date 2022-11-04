/* eslint-disable @next/next/no-img-element */

import ContactUs from 'components/Contacts/ContactUs'
import Container from 'components/Container'
export default function Contacts() {
  return (
    <Container>
      <div
        id='bue'
        className='flex flex-col items-center justify-center w-fit inset-0'
      >
        <br />
        <div className='bg-zinc-800 max-w-2xl w-screen h-10 rounded-t-lg dark:bg-zinc-400'>
          <div className='bg-red-600 h-3 w-3 rounded-full mt-3 ml-4'></div>
          <div className='bg-yellow-500 h-3 w-3 rounded-full -mt-3 ml-9'></div>
          <div className='bg-green-600	 h-3 w-3 rounded-full -mt-3 ml-14'></div>
        </div>
        <div className='bg-zinc-900 max-w-2xl w-full -mt-1 h-full rounded-b-lg dark:bg-zinc-300'>
          <ContactUs />
        </div>
        <br />
      </div>
    </Container>
  )
}
