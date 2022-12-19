import Image from "next/image";
import { HeaderPag } from "./Header";
import Tous from '../public/static/images/TOUS.png'
import Roxana from '../public/static/images/Roxana-Acosta.png'
import audioRoxana from '../public/static/audio/ROXANA.mp3'
import { AudioTag } from "./audioTag";

export const Delujo = ({Width}) => {
    return (
        <>  
            <div>
                <HeaderPag Title='DELUJO'/>
                <Image src={Tous.src}
                        width={Width}
                        height={Width}
                        className="w-full"
                        alt="DJ-1"
                />
            </div>
            <div className="my-1">
                <HeaderPag Title='DELUJO'/>
                <div>
                    <AudioTag Source={audioRoxana} Name={'RoxanaAudio'}/>
                    <Image src={Roxana.src}
                            width={Width}
                            height={Width}
                            className="w-full mt-[-15%] md:mt-[-5%]"
                            alt="DJ-2"
                    />
                </div>
            </div>
        </>
    )
}