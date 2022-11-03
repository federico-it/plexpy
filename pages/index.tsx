/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import BigText from 'components/BigText'
import Container from 'components/Container'
export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center inset-0'>
        <BigText slides={['Plex', 'And', 'Raspberry Pi']} />
        <br></br>
        <div className='flex flex-row'>
          <div className='basis-2/4 lg:-ml-44 md:visible invisible'>
            <img
              src='https://plexpy.com/wp-content/uploads/2021/03/raspberry-pi4-768x449.png'
              alt='Rasp'
            />
          </div>
          <div className='basis-2/4 -mt-5 -ml-32 md:-ml-0 md:basis-1/4 '>
            <img
              className='h-52 w-full'
              src='https://www.raspberrypi.com/app/uploads/2022/02/COLOUR-Raspberry-Pi-Symbol-Registered.png'
              alt='Rasp'
            />{' '}
          </div>
          <div className='basis-2/4 md:basis-1/4'>
            <img
              className='h-40'
              src='https://static.macupdate.com/products/42311/l/plex-media-server-logo.png?v=1666703601'
              alt='Rasp'
            />
          </div>
          <div className='basis-2/4 -mr-44 md:visible invisible'>
            <img
              src='https://support.plex.tv/wp-content/uploads/sites/4/2018/11/dev-4.jpg'
              alt='Rasp'
            />
          </div>
        </div>
        <br></br>

        <Link href='/tutorial'>
          <a className='px-28 py-2 mx-auto text-lg font-bold text-gray-900 bg-gray-100 rounded-md dark:text-gray-100 dark:bg-gray-800'>
            See How 🔥
          </a>
        </Link>
      </div>
    </Container>
  )
}
