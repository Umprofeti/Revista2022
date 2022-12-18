import Image from 'next/image'
import Arline from '../public/static/images/ARLINE.png'
import audioArline from '../public/static/audio/ARLINE_FRANCIS.ogg'
import { HeaderPag } from './Header'
import { AudioTag } from './audioTag'

export const Empresarios = ({Width}) => {
    
    return(
        <div className='mb-[-12%]'>
          <HeaderPag Title='EMPRESARIOS'/>
          <div className='mt-[-5%]'>
            <AudioTag Source={audioArline} Name={'ArlineAudio'} />
            <Image src={Arline.src}
                    width={Width}
                    height={Width}
                    className="w-full"
                    alt='E-1'
            />
          </div>
        </div>
    )

}