/* eslint-disable @next/next/no-img-element */
import Container from 'components/Container'
import YoutubeEmbed from 'components/Yt/YoutubeEmbed'

export default function Tutorial() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center inset-0'>
        <img
          src='https://pbs.twimg.com/media/DkfQk96U8AIed9s?format=png&name=4096x4096'
          alt='Test'
        />
        <h1 className='text-3xl text-center font-extrabold tracking-tight '>
          RASPBERRY PI AND PLEX: HOW TO TURN YOUR MINI COMPUTER INTO A
          MULTIMEDIA SERVER
        </h1>
        <br />
        <YoutubeEmbed embedId='gBUgl2dGks4'></YoutubeEmbed>
        <br />
        <span className='text-2xl font-bold'>INTRODUCTION</span>
        <br />
        <br />
        <p>
          The Raspberry Pi mini computer was born as an educational machine and
          as the first tool to put your knowledge into practice. It has now
          evolved and thanks to its modest power it can be used in many
          different projects. One of the most popular projects the Raspberry Pi
          is used for is turning it into a home media center. <br></br> Plex is
          a well-known streaming media server that allows you to organize
          Movies, Music, Pictures and Videos and stream them to all your devices
          at any time and from anywhere. <br></br> Let’s see now how to install
          Plex Media Server on Raspberry Pi.
        </p>
        <br />
        <span className='text-2xl font-bold'>PREREQUISITES</span>
        <br />
        <br />
        <ul className='list-disc'>
          <li>
            Raspberry with Raspbian installed. Or else Ubuntu. If you do not
            know how to proceed with the installation click&nbsp;
            <a
              className='text-slate-500 hover:text-blue-600'
              href='https://www.instantpy.com/raspberry-pi-setup'
              target='_blank'
              rel='noreferrer noopener'
            >
              HERE
            </a>
            , I recommend an installation without a graphical interface in order
            to make everything lighter. Plex doesn&rsquo;t need a GUI as it has
            its own.
          </li>
          <li>
            I recommend using external storage for media files. A HDD, SSD, or
            at most a USB stick will do just fine.
          </li>
        </ul>
        <br />
        <span className='text-2xl font-bold'>INSTALLATION</span>
        <br />
        <p>
          The safest and easiest way to install Plex Media Server on Raspberry
          Pi is to use the official repository.
          <br />
          Installation shouldn&rsquo;t take more than 20.
        </p>
        <p>
          Log into the Raspberry via SSH or connect it to a monitor and follow
          the steps below.
          <br />
          Let&rsquo;s start with updating our Raspberry.
        </p>
        <br />
        <img
          className='w-52'
          src='https://i.postimg.cc/FzBYqB7f/Snap-2.png'
          alt='ciao'
        />
      </div>
    </Container>
  )
}
