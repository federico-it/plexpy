/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/Button'
import Container from 'components/Container'
import YoutubeEmbed from 'components/Yt/YoutubeEmbed'

export default function Tutorial() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center w-fit inset-0'>
        <img
          className='w-3/5'
          src='https://plexpy.com/static/DkfQk96U8AIed9s.png'
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
        <ul className='list-disc ml-4 '>
          <li>
            Raspberry with Raspbian installed. Or else Ubuntu. If you do not
            know how to proceed with the installation click&nbsp;
            <a
              className='text-gray-500 hover:text-neutral-300 ml-1 text-secondary hover:text-primary group'
              href='https://www.instantpy.com/raspberry-pi-setup'
              target='_blank'
              rel='noreferrer noopener'
            >
              HERE
              <span className='ml-1 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100'>
                ↗
              </span>
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
        <div className='bg-zinc-800 max-w-2xl w-full h-10 rounded-t-lg dark:bg-zinc-400'>
          <div className='bg-red-600 h-3 w-3 rounded-full mt-3 ml-4'></div>
          <div className='bg-yellow-500 h-3 w-3 rounded-full -mt-3 ml-9'></div>
          <div className='bg-green-600	 h-3 w-3 rounded-full -mt-3 ml-14'></div>
        </div>
        <div className='bg-zinc-900 max-w-2xl w-full -mt-1 h-auto rounded-b-lg dark:bg-zinc-300'>
          <p className='select-all mx-7 mt-7 pb-8 dark:text-black text-white'>
            sudo apt-get update <br></br> sudo apt-get upgrade
          </p>
        </div>
        <br />
        <p>
          Now install the dependencies needed to enable a new repository over
          HTTPS:
        </p>
        <br />
        <div className='bg-zinc-800 max-w-2xl w-full h-10 rounded-t-lg dark:bg-zinc-400'>
          <div className='bg-red-600 h-3 w-3 rounded-full mt-3 ml-4'></div>
          <div className='bg-yellow-500 h-3 w-3 rounded-full -mt-3 ml-9'></div>
          <div className='bg-green-600	 h-3 w-3 rounded-full -mt-3 ml-14'></div>
        </div>
        <div className='bg-zinc-900 max-w-2xl w-full -mt-1 h-auto rounded-b-lg dark:bg-zinc-300'>
          <p className='mx-7 mt-7 pb-8 dark:text-black text-white'>
            sudo apt install apt-transport-https ca-certificates curl
          </p>
        </div>
        <br />
        <p>
          Import the repository GPG key and add the APT repository to the system
          software repository list by running the following commands:
        </p>
        <br />
        <div className='bg-zinc-800 max-w-2xl w-full h-10 rounded-t-lg dark:bg-zinc-400'>
          <div className='bg-red-600 h-3 w-3 rounded-full mt-3 ml-4'></div>
          <div className='bg-yellow-500 h-3 w-3 rounded-full -mt-3 ml-9'></div>
          <div className='bg-green-600	 h-3 w-3 rounded-full -mt-3 ml-14'></div>
        </div>
        <div className='bg-zinc-900 max-w-2xl w-full -mt-1 h-auto rounded-b-lg dark:bg-zinc-300'>
          <p className='mx-7 mt-7 pb-8 dark:text-black text-white'>
            curl https://downloads.plex.tv/plex-keys/PlexSign.key | sudo apt-key
            add - <br></br>echo deb https://downloads.plex.tv/repo/deb public
            main | sudo tee /etc/apt/sources.list.d/plexmediaserver.list
          </p>
        </div>
        <br />
        <p>
          As soon as the Plex repository is enabled, update the package list and
          install the latest version of the Plex Media Server:
        </p>
        <br />
        <div className='bg-zinc-800 max-w-2xl w-full h-10 rounded-t-lg dark:bg-zinc-400'>
          <div className='bg-red-600 h-3 w-3 rounded-full mt-3 ml-4'></div>
          <div className='bg-yellow-500 h-3 w-3 rounded-full -mt-3 ml-9'></div>
          <div className='bg-green-600	 h-3 w-3 rounded-full -mt-3 ml-14'></div>
        </div>
        <div className='bg-zinc-900 max-w-2xl w-full -mt-1 h-auto rounded-b-lg dark:bg-zinc-300'>
          <p className='mx-7 mt-7 pb-8 dark:text-black text-white'>
            sudo apt update <br></br>sudo apt install plexmediaserver
          </p>
        </div>
        <br />
        <p>
          This may take a few minutes. Once installation is complete, check
          operation with:
        </p>
        <br />
        <div className='bg-zinc-800 max-w-2xl w-full h-10 rounded-t-lg dark:bg-zinc-400'>
          <div className='bg-red-600 h-3 w-3 rounded-full mt-3 ml-4'></div>
          <div className='bg-yellow-500 h-3 w-3 rounded-full -mt-3 ml-9'></div>
          <div className='bg-green-600	 h-3 w-3 rounded-full -mt-3 ml-14'></div>
        </div>
        <div className='bg-zinc-900 max-w-2xl w-full -mt-1 h-auto rounded-b-lg dark:bg-zinc-300'>
          <p className='mx-7 mt-7 pb-8 dark:text-black text-white'>
            sudo systemctl status plexmediaserver
          </p>
        </div>
        <br />
        <span className='text-2xl font-bold'>CONFIGURATION</span>
        <br />
        <p>
          Now let’s create the directories that will store the Plex media files:
        </p>
        <br />
        <div className='bg-zinc-800 max-w-2xl w-full h-10 rounded-t-lg dark:bg-zinc-400'>
          <div className='bg-red-600 h-3 w-3 rounded-full mt-3 ml-4'></div>
          <div className='bg-yellow-500 h-3 w-3 rounded-full -mt-3 ml-9'></div>
          <div className='bg-green-600	 h-3 w-3 rounded-full -mt-3 ml-14'></div>
        </div>
        <div className='bg-zinc-900 max-w-2xl w-full -mt-1 h-auto rounded-b-lg dark:bg-zinc-300'>
          <p className='mx-7 mt-7 pb-8 dark:text-black text-white'>
            sudo mkdir -p /opt/plexmediafiles/movies <br></br> sudo mkdir -p
            /opt/plexmediafiles/series
          </p>
        </div>
        <br />
        <p>
          Plex Media Server works with the <strong>PLEX</strong> user who
          obviously needs to have read and write permissions for media files and
          directories. We grant permissions:
        </p>
        <br />
        <div className='bg-zinc-800 max-w-2xl w-full h-10 rounded-t-lg dark:bg-zinc-400'>
          <div className='bg-red-600 h-3 w-3 rounded-full mt-3 ml-4'></div>
          <div className='bg-yellow-500 h-3 w-3 rounded-full -mt-3 ml-9'></div>
          <div className='bg-green-600	 h-3 w-3 rounded-full -mt-3 ml-14'></div>
        </div>
        <div className='bg-zinc-900 max-w-2xl w-full -mt-1 h-auto rounded-b-lg dark:bg-zinc-300'>
          <p className='mx-7 mt-7 pb-8 dark:text-black text-white'>
            sudo chown -R plex: /opt/plexmediafiles
          </p>
        </div>
        <br />
        <p>
          Obviously you can choose any folder where to place the multimedia
          files, but remember to grant permissions. <br></br> Now we can proceed
          with the server configuration. Open your browser, digit
          <strong> http://YOUR_SERVER_IP:32400/web</strong> and you should view
          <strong> Login</strong> page.
          <br></br>
          <br></br>
          To use Plex Media Server, you need to create an account. Let’s proceed
          then, press the Google, Facebook or Email button to create a free Plex
          account. Also for premium features you can purchase a{' '}
          <a
            className='text-gray-500 hover:text-neutral-300 ml-1 text-secondary hover:text-primary group'
            href='https://plex.tv/plex-pass/'
            target='_blank'
            rel='noreferrer noopener'
          >
            Plex Pass plan
            <span className='ml-1 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100'>
              ↗
            </span>
          </a>
          .<br></br>
          <br></br>
          Once registered, you will be redirected to the page with information
          on how Plex works. Click on the button <strong>Got it</strong>
          <br></br>
          <br></br>
          On the next screen enter the Plex server name, leave the box{' '}
          <strong>Allow me to access my media outside my home</strong> selected
          and click <strong>Next</strong>. The next step is to add a media
          library. Click on the button <strong>Add Library</strong> When the
          pop-up window appears, select movies as the library type and click
          <strong> Next</strong>. In the next step click{' '}
          <strong>Browse for media folder </strong>
          and add the path to the directory that will contain the Movies media
          files, in our case <strong>/opt/plexmediafiles/movies</strong>. Click
          the button <strong>Add</strong> and then on{' '}
          <strong>Add Library</strong>.<br></br>
          <br></br>
          You can add as many libraries as you want. Click <strong>Next</strong>
          , then <strong>Done</strong>, you will be redirected to the Plex web
          dashboard.
          <br></br>
          <br></br>
          Now that you’ve completed the setup wizard, you can start exploring
          Plex’s options and everything it can do.
        </p>
        <br />
        <Button></Button>
        <br />

        <br />
      </div>
    </Container>
  )
}
