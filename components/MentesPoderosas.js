import Image from "next/image";
import { HeaderPag } from "./Header";
import Orlando from '../public/static/images/Orlando-allard.png'
import Raiza from '../public/static/images/RAIZA.png'
import audioRaiza from '../public/static/audio/RAIZA.mp3'
import { AudioTag } from "./audioTag";

export const MentesPoderosas = ({Width})=> {
    return (
        <>
            <div>
                <HeaderPag Title='MENTES PODEROSAS'/>
                <div>
                    <AudioTag Source={audioRaiza} Name={'RaizaAudio'}/>
                    <Image src={Raiza.src}
                            width={Width}
                            height={Width}
                            className="w-full"
                            alt="MP-1"
                    />
                    {/* <audio controls={true} preload="true" className='w-full rounded-full mb-9 md:shadow-xl md:mb-0 md:w-[45%] md:relative md:bottom-[11vw] md:left-[53%]' >
                        <source src={audioRaiza}  type='audio/mpeg'/>
                    </audio> */}
                    
                </div>
            </div>
            <div>
                <HeaderPag Title='MENTES PODEROSAS'/>
                <Image src={Orlando.src}
                        width={Width}
                        height={Width}
                        className="w-full"
                        alt="MP-2"
                />
            </div> 
        </>
    )
}