import Image from "next/image";
import { HeaderPag } from "./Header";
import Orlando from '../public/static/images/Orlando-allard.png'
import Raiza from '../public/static/images/RAIZA.png'
import audioRaiza from '../public/static/audio/RAIZA.mp3'
import { AudioTag } from "./audioTag";

export const MentesPoderosas = ({Width})=> {
    return (
        <>
            <div  className="bg-white my-2 shadow-xl">
                <HeaderPag Title='MENTES PODEROSAS'/>
                <div className="">
                    <AudioTag Source={audioRaiza} Name={'RaizaAudio'}/>
                    <Image src={Raiza.src}
                            width={Width}
                            height={0}
                            className="w-full  mt-[-10%] md:mt-[-5%]"
                            alt="MP-1"
                    />
                </div>
            </div>
            <div  className="bg-white my-2 shadow-xl">
                <HeaderPag Title='MENTES PODEROSAS'/>
                <Image src={Orlando.src}
                        width={Width}
                        height={0}
                        className="w-full"
                        alt="MP-2"
                />
            </div> 
        </>
    )
}