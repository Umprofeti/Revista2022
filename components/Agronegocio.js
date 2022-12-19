import Fatima from '../public/static/images/FATIMA-SAEZ.png'
import Image from 'next/image'
import { HeaderPag } from './Header'
import { YoutubeEmeded } from './YoutubeEmbeded'

export const Agronegocio = ({Width}) => {
    return (
        <div className=''>
            <div className='bg-white my-2 shadow-xl'>
                <HeaderPag Title='AGRONEGOCIO'/>
                <YoutubeEmeded Url={'https://www.youtube.com/watch?v=sn-CgB2BLg4&feature=youtu.be'} />
            </div>
            <div className='bg-white my-2 shadow-xl'>
                <HeaderPag Title='AGRONEGOCIO'/>
                <Image src={Fatima.src}
                        width={Width}
                        height={0}
                        className="w-full"
                        alt='Agro-2'
                />
            </div>
        </div>
    )
}