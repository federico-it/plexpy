/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import BigText from 'components/BigText'
import Container from 'components/Container'
export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center inset-0'>
        <BigText slides={['Plex', 'And', 'Raspberry Pi']} />
        <img
          className='w-full md:-mt-28'
          src='https://i.postimg.cc/CxkYDPvg/Nuovo-progetto.png'
          alt='Plex Screens and Raspberry Board'
        />
        <br></br>
        <br></br>
        <div className='text-center'>
          <p>
            Build your own Plex Media Server on Raspberry Pi<br></br>{' '}
            economical, in a few simple steps.
          </p>
          <br></br>
          <br></br>
        </div>
        <Link href='/tutorial'>
          <a className='px-28 py-2 mx-auto text-lg font-bold text-gray-900 bg-gray-100 rounded-md dark:text-gray-100 dark:bg-gray-800'>
            See More 🔥
          </a>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className='grid grid-cols-1'>
          <div>
            <div className='grid grid-cols-3 text-center'>
              <div>
                <h1 className='text-center text-2xl font-bold'>TUTORIAL</h1>
                <br />
                <p className='text-1xl font-semibold'>
                  You will find a guide that will explain step by step how to
                  install and configure your media server.
                </p>
              </div>
              <div>
                <h1 className='text-center text-2xl font-bold'>WHY</h1>
                <br />
                <p className='text-1xl font-semibold'>
                  Once you’ve set everything up, you won’t want to go back. You
                  will be able to manage your entire multimedia library with a
                  few dollars.
                </p>
              </div>
              <div>
                <h1 className='text-center text-2xl font-bold'>NEAR FUTURE…</h1>
                <br />
                <p className='text-1xl font-semibold'>
                  A forum will be available shortly where you can discuss PLEX
                  and Raspberry. <br></br>
                  <br></br>SOON
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div
            id='plex'
            className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-l-3xl rounded-r-3xl md:rounded-full'
          >
            <div className='grid grid-cols-2 text-center items-center'>
              <div className=''>
                <img
                  className='lg:w-2/4 md:3/4 lg:ml-20 mt-20 mb-20 '
                  src='https://plexpy.com/wp-content/uploads/2021/03/kisspng-plex-media-server-computer-icons-media-player-tv-icon-5aed5cb1246fa8.2200671815255052011493-768x768.png'
                  alt='Plex Logo'
                />
              </div>
              <div className='lg:mr-20 mr-6 mt-6 mb-8'>
                <h1 className='text-center text-3xl font-bold text-white'>
                  PLEX
                </h1>
                <br />
                <p className='text-1xl font-semibold text-white'>
                  Plex brings together all the media that interest you. Your
                  personal collection will look beautiful alongside stellar
                  streaming content. Enjoy Live TV and DVR, a growing catalog of
                  great web shows, news and podcasts. It’s finally possible to
                  enjoy all the media you love in one app, on any device, no
                  matter where you are.
                </p>
                <br />
                <Link href='https://www.plex.tv/'>
                  <a className='px-2 md:px-12 py-2 mx-auto text-lg font-bold text-white bg-amber-400 rounded-md dark:text-white dark:bg-amber-400'>
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <br></br>

          <br></br>
          <div className=' bg-gradient-to-l from-yellow-400 via-red-500 to-pink-500 rounded-l-3xl rounded-r-3xl md:rounded-full'>
            <div className='grid grid-cols-2 text-center items-center'>
              <div className='lg:ml-20 ml-6 mt-6 mb-8'>
                <h1 className='text-center text-3xl font-bold text-white'>
                  Raspberry Pi
                </h1>
                <br />
                <p className='text-1xl font-semibold text-white'>
                  Beyond the technicalities, Raspberry Pi can be considered a
                  “miniature computer”. The Raspberry Pi can perform many useful
                  functions not only in the IT sector, but for example also in
                  the home automation sector. …
                </p>
                <br />
                <Link href='https://www.raspberrypi.org/'>
                  <a className='px-2 md:px-12 py-2 mx-auto text-lg font-bold text-white bg-amber-400 rounded-md dark:text-white dark:bg-amber-400'>
                    Learn More
                  </a>
                </Link>
              </div>
              <div className=''>
                <img
                  className='lg:w-2/4 md:3/4 lg:ml-20 mt-20 mb-20 '
                  src='https://plexpy.com/wp-content/uploads/2021/03/Raspi-PGB001.png'
                  alt='Raspberry Logo'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
