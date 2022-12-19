import Head from 'next/head'
import Image from 'next/image'
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
import { AudioTag } from '../components/audioTag'

/* Imagenes */
import Portada from '../public/static/images/portada-2022-RV.jpg'
import ad1 from '../public/static/images/TOUS-AD.png'
import ad4 from '../public/static/images/AN.png'
import ad3 from '../public/static/images/SAMSUNG.jpg'
import ad2 from '../public/static/images/REDMARLA.png'
import ad5 from '../public/static/images/BODERVILLAGE.png'
import ad6 from '../public/static/images/FSarte.png'
import Joyeria from '../public/static/images/JOYERIA-RV.png'
import Capsula from '../public/static/images/CAPSULA.png'
import Staff from '../public/static/images/STAFF-(PAG).png'
import CartaEditorial from '../public/static/images/CARTA-EDITORIAL-(PAG).png'
import Tinta from '../public/static/images/TINTA-DE-ORO-(PAG).png'
import ContraPortada from '../public/static/images/VILARNAU-CONTRAPORTADA.png'


export default function Home() {

  const width = 2000;

  return (
    <>
      <Head>
        <title>RENDEZVOUS VOL2</title>
        <meta name="description" content="Revista RendezVous Segunda Edicion 2022" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={Portada.src}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-logo-pattern bg-fixed bg-cover flex justify-center items-center">
        <div className='bg-transparent flex flex-col gap-0 w-full md:w-[75%]'>
        {/* Portada */}
          <div>
              <Image src={Portada.src}
                width={width}
                height={width}
                className="w-full my-2 shadow-xl"
                alt='Portada'
              />
              {/* AD-Tous */}
              <a href='https://www.tous.com/ic-es/'>
                <Image src={ad1.src}
                  width={width}
                  height={width}
                  className="w-full my-2 shadow-xl"
                  alt='Anuncio Tous'
                />
              </a>
          </div>
          {/* Contenido */}
          <Contenido Width={width}/>
          {/* Staff */}
          <div className=''>
              <Image src={Staff.src}
                    width={width}
                    height={width}
                    className="w-full shadow-xl"
                    alt='Staff'
              />
          </div>
          {/* Carta Editorial */}
          <div className='bg-white shadow-xl my-2'>
            <HeaderPag Title=''/>
              <Image src={CartaEditorial.src}
                    width={width}
                    height={width}
                    className="w-full"
                    alt='Carta editorial'
            />
          </div>
          <Wins Width={width} />
          {/* AD2 */}
          <Image src={ad2.src}
                width={width}
                height={width}
                className="w-full my-2 shadow-xl"
                alt='Anuncio-2'
          />
          <Empresarios Width={width} />
          {/* AD3 */}
          <div className='mt-[14%] shadow-xl'>
            <Image src={ad3.src}
                  width={width}
                  height={width}
                  className="w-full"
                  alt='Anuncio-3'
            />
          </div>
          <Agronegocio  Width={width}/>
          {/* AD4 */}
          <Image src={ad4.src}
                width={width}
                height={width}
                className="w-full my-2 shadow-xl"
                alt='Anuncio-4'
          />
          <Morloports Width={width}/>
          {/* AD5 */}
          <Image src={ad5.src}
                width={width}
                height={width}
                className="w-full my-2 shadow-xl"
                alt='Anuncio-5'
          />
          <MentesPoderosas Width={width}/>
          {/* AD6 */}
          <Image src={ad6.src}
                    width={width}
                    height={width}
                    className="w-full my-2 shadow-xl"
          />
          <Delujo  Width={width}/>
          {/* AD7 */} 
          <Image src={Joyeria.src}
                width={width}
                height={width}
                className="w-full my-2 shadow-xl"
                alt='Joyeria'
          />
          <div  className="bg-white my-2 shadow-xl">
            <HeaderPag Title='TINTA DE ORO'/>
            <Image src={Tinta.src}
                    width={width}
                    height={width}
                    className="w-full my-2 shadow-xl"
                    alt='Tinta de Oro'
            />
          </div>
          {/* CAPSULA */} 
          <div  className="bg-white my-2 shadow-xl">
            <HeaderPag Title='CÁPSULA'/>
            <Image src={Capsula.src}
                    width={width}
                    height={width}
                    className="w-full my-2 shadow-xl"
                    alt='Cápsula'
            /> 
          </div>
          <Tendencia Width={width}/>
          <Gastronomia/>
          <Sociedad Width={width} />
          {/* Contraportada */}
          <div>
            <Image src={ContraPortada.src}
                    width={width}
                    height={width}
                    className="w-full my-2 shadow-xl"
                    alt='Contra Portada'
            />
          </div>
        </div>
      </main>
    </>
  )
}
