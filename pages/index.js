import Head from 'next/head'
import { HeaderPag } from '../components/Header'
import Image from 'next/image'
/* Imagenes */
import Raiza from '../public/static/images/RAIZA.png'
import Portada from '../public/static/images/portada-2022-RV.jpg'
import ad1 from '../public/static/images/TOUS-AD.png'
import Contenido from '../public/static/images/CONTENIDO-(PAG1).png'
import Contenido2 from '../public/static/images/CONTENIDO-(PAG2).png'
import Contenido3 from '../public/static/images/CONTENIDO-(PAG3).png'
import Staff from '../public/static/images/STAFF-(PAG).png'
import CartaEditorial from '../public/static/images/CARTA-EDITORIAL-(PAG).png'
import Arline from '../public/static/images/ARLINE.png'
import Fatima from '../public/static/images/FATIMA-SAEZ.png'
import Nautico from '../public/static/images/Autoridad-Nautico.png'
import Beatriz from '../public/static/images/BEATRICE.png'
import Tous from '../public/static/images/TOUS.png'
import Roxana from '../public/static/images/Roxana-Acosta.png'
import Tinta from '../public/static/images/TINTA-DE-ORO-(PAG).png'
import Tatto from '../public/static/images/TATTOO.png'
import Diego from '../public/static/images/DIEGO-VARGAS.png'
import Boda from '../public/static/images/BODA--DEL-AÑO.png'
import ContraPortada from '../public/static/images/VILARNAU-CONTRAPORTADA.png'
import Wins from '../public/static/images/CAT-PORTADA-WINS-PANAMá(PAG).png'
import ReactPlayer from 'react-player'

/*Audios*/
import audioWins from '../public/static/audio/WINS.mp3'
import audioArline from '../public/static/audio/ARLINE_FRANCIS.ogg'
import audioRoxana from '../public/static/audio/ROXANA.mp3'

export default function Home() {

  const width = 2000;

  return (
    <>
      <Head>
        <title>Revista 2022</title>
        <meta name="description" content="Revista RendezVous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-logo-pattern bg-fixed bg-cover flex justify-center items-center">
        <div className='bg-white flex flex-col gap-0 w-full md:w-[75%] shadow-xl'>
        {/* Portada */}
        <div>
            <Image src={Portada.src}
              width={width}
              height={width}
              className="w-full"
            />
            {/* AD-Tous */}
            <a href='https://www.tous.com/ic-es/'>
              <Image src={ad1.src}
                width={width}
                height={width}
                className="w-full"
              />
            </a>
        </div>
        {/* Contenido */}
        <div>
          <Image src={Contenido.src}
                width={width}
                height={width}
                className="w-full"
          />
          <Image src={Contenido2.src}
                width={width}
                height={width}
                className="w-full"
          />
          <Image src={Contenido3.src}
                width={width}
                height={width}
                className="w-full"
          />
        </div>
        {/* Staff */}
        <div>
            <Image src={Staff.src}
                  width={width}
                  height={width}
                  className="w-full"
            />
        </div>
        {/* Carta Editorial */}
        <div>
          <HeaderPag Title=''/>
            <Image src={CartaEditorial.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div>
        <div>
            <HeaderPag Title='PORTADA'/>
            <div>
              <Image src={Wins.src}
                    width={width}
                    height={width}
                    className="w-full"
              />
              <audio controls={true} preload="true" className='w-full rounded-full mb-3 shadow-xl md:mb-0 md:w-[60%] md:relative md:bottom-[20vw] md:left-[30%]' >
                <source src={audioWins}  type='audio/mpeg'/>
            </audio>
            </div>
        </div>
        {/* AD2 */}
        <div className='mb-[-12%]'>
          <HeaderPag Title='EMPRESARIOS'/>
          <div>
            <Image src={Arline.src}
                    width={width}
                    height={width}
                    className="w-full"
            />
            <audio controls={true} preload="true" className='w-full rounded-full mb-9 md:shadow-xl md:mb-0 md:w-[25%] md:relative md:bottom-[11vw] md:left-[5%]' >
                <source src={audioArline}  type='audio/ogg'/>
            </audio>
          </div>
        </div>
        {/* AD3 */}
        <div>
          <HeaderPag Title='AGRONEGOCIO'/>
          <div className=' md:hidden'>
            <ReactPlayer url='https://www.youtube.com/watch?v=sn-CgB2BLg4&feature=youtu.be'  width='100%' height='300px'/> 
          </div>
          <div className='hidden md:block'>
            <ReactPlayer url='https://www.youtube.com/watch?v=sn-CgB2BLg4&feature=youtu.be'  width='100%' height='600px'/> 
          </div>
        </div>
        <div>
          <HeaderPag Title='AGRONEGOCIO'/>
          <Image src={Fatima.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div>
        {/* AD4 */}
        <div>
          <HeaderPag Title='MARLOPORTS'/>
          <Image src={Beatriz.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div>
        <div>
          <HeaderPag Title='MARLOPORTS'/>
          <Image src={Nautico.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div>
        {/* AD5 */}
        <div>
          <HeaderPag Title='MENTES PODEROSAS'/>
          <Image src={Raiza.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div>
        {/* <div>
          <HeaderPag Title='MENTES PODEROSAS'/>
          <Image src={Orlando.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div> */}
        {/* AD6 */}
        <div>
          <HeaderPag Title='DE LUJO'/>
          <Image src={Tous.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div>
        <div>
          <HeaderPag Title='DE LUJO'/>
          <div>
            <audio controls={true} preload="true" className='w-full rounded-full mb-3 shadow-xl md:mb-0 md:w-[25%] md:relative md:top-[5vw] md:left-[70%]' >
                <source src={audioRoxana}  type='audio/mpeg'/>
            </audio>
            <Image src={Roxana.src}
                    width={width}
                    height={width}
                    className="w-full md:mt-[-5%]"
            />
          </div>
        </div>
        {/* AD7 */} 
        <div>
          <HeaderPag Title='TINTA DE ORO'/>
          <Image src={Tinta.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div>
        {/* CAPSULA */} 
        <div>
          <HeaderPag Title='CÁPSULA'/>
          {/* <Image src={Tinta.src}
                  width={width}
                  height={width}
                  className="w-full"
          /> */}
        </div>
        <div>
          <HeaderPag Title='TENDENCIA'/>
          <Image src={Tatto.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div>
        <div>
          <HeaderPag Title='TENDENCIA'/>
          <Image src={Diego.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div>
        <div>
          <HeaderPag Title='GASTRONOMIA'/>
          {/* <Image src={Diego.src}
                  width={width}
                  height={width}
                  className="w-full"
          /> */}
        </div>
        <div>
          <HeaderPag Title='SOCIEDAD'/>
          <Image src={Boda.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div>
        {/* Contraportada */}
        <div>
          <Image src={ContraPortada.src}
                  width={width}
                  height={width}
                  className="w-full"
          />
        </div>
        </div>
      </main>
    </>
  )
}
