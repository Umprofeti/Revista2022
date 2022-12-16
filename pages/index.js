import Head from 'next/head'
import Image from 'next/image'
import pag1 from '../public/static/images/RAIZA.png'
import audio from '../public/audio/RAIZA.mp3'
export default function Home() {
  return (
    <>
      <Head>
        <title>Revista 2022</title>
        <meta name="description" content="Revista RendezVous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-logo-pattern bg-fixed bg-cover flex justify-center items-center">
        <div className='bg-white flex flex-col gap-0 w-full md:w-1/2 shadow-xl'>
          <div className=''>
            <img src={pag1.src}
                className="w-full"
            />
            <audio controls={true} className="relative w-[30%] bottom-[19vw] left-[53%] md:w-[44%] md:bottom-[8vw] md:left-[53%]">
              <source src={audio} type="audio/mpeg"/>
            </audio>
          </div>
          <div className='mt-[-54px]'>
            <img src={pag1.src}
                  className="w-full"
            />
            <audio controls={true} className="relative w-[30%] bottom-[19vw] left-[53%] md:w-[44%] md:bottom-[8vw] md:left-[53%]">
              <source src={audio} type="audio/mpeg"/>
            </audio>
          </div>
        </div>
      </main>
    </>
  )
}
