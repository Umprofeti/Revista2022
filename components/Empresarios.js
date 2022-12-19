import Image from 'next/image'
import Arline from '../public/static/images/ARLINE.png'
import audioArline from '../public/static/audio/ARLINE_FRANCIS.ogg'
import { HeaderPag } from './Header'
import { AudioTag } from './audioTag'
import ReactPlayer from 'react-player'

export const Empresarios = ({Width}) => {
    
    return(
        <div className='mb-[-12%] '>
          <div className='bg-white shadow-xl'>
            <HeaderPag Title='EMPRESARIOS'/>
            <div className=' md:hidden'>
                <ReactPlayer url='https://www.youtube.com/watch?v=KsMY12Xis8A'  width='100%' height='300px'/> 
            </div>
            <div className='hidden md:block'>
              <ReactPlayer url='https://www.youtube.com/watch?v=KsMY12Xis8A'  width='100%' height='600px'/> 
            </div> 
          </div>
          <div className='bg-white shadow-xl'>
            <HeaderPag Title='EMPRESARIOS'/>
            <div className=''>
              <AudioTag Source={audioArline} Name={'ArlineAudio'} />
              <Image src={Arline.src}
                      width={Width}
                      height={Width}
                      className="w-full mt-[-5%]"
                      alt='E-1'
              />
            </div>
          </div>
        </div>
    )

}