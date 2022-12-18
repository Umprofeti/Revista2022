import Fatima from '../public/static/images/FATIMA-SAEZ.png'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { HeaderPag } from './Header'

export const Agronegocio = ({Width}) => {
    return (
        <>
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
                        width={Width}
                        height={Width}
                        className="w-full"
                        alt='Agro-2'
                />
            </div>
        </>
    )
}