import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { HeaderPag } from '../components/Header'
import { Contenido } from '../components/Contenido'
import { Empresarios } from '../components/Empresarios'
import { Agronegocio } from '../components/Agronegocio'
import { Morloports } from '../components/Marloports'
import { MentesPoderosas } from '../components/MentesPoderosas'
import { Delujo } from '../components/Delujo'
import { Tendencia } from '../components/Tendencia'
import { Wins } from '../components/Wins'
import { Sociedad } from '../components/Sociedad'
import { Gastronomia } from '../components/Gastronomia'

/* Imagenes */
import Portada from '../public/static/images/portada-2022-RV.jpg'
import adVLCK1 from '../public/static/images/VLCK-AD-1.png'
import adVLCK2 from '../public/static/images/VLCK-AD-2.png'
import adVLCK3 from '../public/static/images/VLCK-AD-3.png'
import adVLCK4 from '../public/static/images/VLCK-AD-4.png'
import adVLCK5 from '../public/static/images/VLCK-AD-5.png'
import ad1 from '../public/static/images/TOUS-AD.png'
import ad4 from '../public/static/images/AN.png'
import ad3 from '../public/static/images/SAMSUNG.jpg'
import ad2 from '../public/static/images/REDMARLA.png'
import ad5 from '../public/static/images/BODERVILLAGE.png'
import ad6 from '../public/static/images/FSarte.png'
import ad7 from '../public/static/images/BEATRIz-AD.png'
import Joyeria from '../public/static/images/JOYERIA-RV.png'
import Capsula from '../public/static/images/CAPSULA.png'
import Staff from '../public/static/images/STAFF-(PAG).png'
import CartaEditorial from '../public/static/images/CARTA-EDITORIAL-(PAG).png'
import Tinta from '../public/static/images/TINTA-DE-ORO-(PAG).png'
import ContraPortada from '../public/static/images/VILARNAU-CONTRAPORTADA.png'
import { LoadAnimation } from '../components/LoadAnimation'
import { AudioTag } from '../components/audioTag'
import TintaAudio from '../public/static/audio/IM A REMARKABLE.mp3'
import Marlo from '../public/static/images/MARLOPORT.png'


export default function Home() {
  const [load, setLoad] = useState(true)

  const width = 1500;
  const Height = 0;

  const desabilitarCarga = () => {
    setLoad(false)
  }

  useEffect(()=> {
    desabilitarCarga()
  }, [])

  return (
    <>
      <Head>
        <title>RENDEZVOUS VOL.2</title>
        <meta name="description" content="Revista RendezVous Segunda Edicion 2022" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:url" content="https://pruebarevista.rendezvouscorp.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="RENDEZVOUS VOL.2"/>
        <meta property="og:description" content="Revista RendezVous Segunda Edicion 2022"/>
        <meta property="og:image" content={`https://pruebarevista.rendezvouscorp.com${Portada.src}`}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="pruebarevista.rendezvouscorp.com"/>
        <meta property="twitter:url" content="https://pruebarevista.rendezvouscorp.com"/>
        <meta name="twitter:title" content="RENDEZVOUS VOL.2"/>
        <meta name="twitter:description" content="Revista RendezVous Segunda Edicion 2022"/>
        <meta name="twitter:image" content={`https://pruebarevista.rendezvouscorp.com${Portada.src}`}/>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-logo-pattern bg-fixed bg-cover flex justify-center items-center">
        {!load?<div className='bg-transparent flex flex-col gap-0 w-full md:w-[75%]'>
        {/* Portada */}
          <div>
              <Image src={Portada.src}
                width={width}
                height={Height}
                className="w-full my-2 shadow-xl"
                alt='Portada'
              />
              {/* AD-Tous */}
              <Image src={ad1.src}
                    width={width}
                    height={Height}
                    className="w-full my-2 shadow-xl"
                    alt='ad-1'
              />
              <Image src={Marlo.src}
                    width={width}
                    height={Height}
                    className="w-full my-2 shadow-xl"
                    alt='MARLOPORTS CUMBRE'
              />
          </div>
          {/* Contenido */}
          <Contenido Width={width}/>
          {/* Staff */}
          <div className=''>
              <Image src={Staff.src}
                    width={width}
                    height={Height}
                    className="w-full shadow-xl"
                    alt='Staff'
              />
          </div>
          {/* Carta Editorial */}
          <div className='bg-white shadow-xl my-2'>
            <HeaderPag Title=''/>
              <Image src={CartaEditorial.src}
                    width={width}
                    height={Height}
                    className="w-full"
                    alt='Carta editorial'
            />
          </div>
          <Image src={Joyeria.src}
                width={width}
                height={Height}
                className="w-full my-2 shadow-xl"
                alt='Joyeria'
          />
          <Wins Width={width} />
          {/* AD2 */}
          <Image src={ad3.src}
                width={width}
                height={Height}
                className="w-full my-2 shadow-xl"
                alt='AD-3'
          />
          <Empresarios Width={width} />
          {/* AD3 */}
          <div className='mt-[14%] shadow-xl'>
            <Image src={ad2.src}
                width={width}
                height={Height}
                className="w-full shadow-xl"
                alt='ad-2'
          />
          </div>
          <Agronegocio  Width={width}/>
          {/* AD4 */}
          <Image src={adVLCK5.src}
                width={width}
                height={Height}
                className="w-full my-2 shadow-xl"
                alt='Anuncio VLCK-4'
          />
          <Morloports Width={width}/>
          {/* AD5 */}
          <Image src={ad4.src}
                width={width}
                height={Height}
                className="w-full my-2 shadow-xl"
                alt='Anuncio 4'
          />
          <MentesPoderosas Width={width}/>
          {/* AD6 */}
          <Image src={ad5.src}
                  width={width}
                  height={Height}
                  className="w-full my-2 shadow-xl"
                  alt='Anuncio Border Village'
          />
          <Delujo  Width={width}/>
          {/* AD7 */} 
            <Image src={adVLCK3.src}
                  width={width}
                  height={Height}
                  className="w-full shadow-xl"
                  alt='Anuncio VLCK-3'
            />
          <div  className="bg-white my-2 shadow-xl">
            <HeaderPag Title='TINTA DE ORO'/>
            <div>
              <AudioTag Source={TintaAudio} Name={'Audio-Tinta'}/>
              <Image src={Tinta.src}
                      width={width}
                      height={Height}
                      className="w-full shadow-xl mt-[-5%]"
                      alt='Tinta de Oro'
              />
            </div>
          </div>
            <Image src={adVLCK4.src}
                  width={width}
                  height={Height}
                  className="w-full shadow-xl"
                  alt='Anuncio VLCK-3'
            />
          {/* CAPSULA */} 
          <div  className="bg-white my-2 shadow-xl">
            <HeaderPag Title='CÁPSULA'/>
            <Image src={Capsula.src}
                    width={width}
                    height={Height}
                    className="w-full shadow-xl"
                    alt='Cápsula'
            /> 
          </div>
          <Image src={adVLCK2.src}
                width={width}
                height={Height}
                className="w-full my-2 shadow-xl"
                alt='AD-4'
          />
          <Tendencia Width={width}/>
          <Image src={ad7.src}
                width={width}
                height={Height}
                className="w-full my-2 shadow-xl"
                alt='AD-5'
          />
          <Gastronomia/>
          <Image src={adVLCK1.src}
                width={width}
                height={Height}
                className="w-full my-2 shadow-xl"
                alt='AD-5'
          />
          <Sociedad Width={width} />
          <Image src={ad6.src}
                width={width}
                height={Height}
                className="w-full my-2 shadow-xl"
                alt='AD-5'
          />
          {/* Contraportada */}
          <div>
            <Image src={ContraPortada.src}
                    width={width}
                    height={Height}
                    className="w-full my-2 shadow-xl"
                    alt='Contra Portada'
            />
          </div>
        </div>: <LoadAnimation/>}
      </main>
    </>
  )
}
