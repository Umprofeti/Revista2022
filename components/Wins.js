import Image from "next/image";
import { HeaderPag } from "./Header";
import ReactPlayer from 'react-player';
import audioWins from '../public/static/audio/WINS.mp3'
import WinsImage from '../public/static/images/WINS.png';
import { AudioTag } from "./audioTag";

export const Wins = ({Width}) => {
    return(
        <div className="bg-white mt-2 shadow-xl">
            <HeaderPag Title='PORTADA'/>
            <div className="mt-[-5%]">
              <AudioTag Source={audioWins} Name={'WinsAudio'} />
              <Image src={WinsImage.src}
                    width={Width}
                    height={Width}
                    className="w-full"
                    alt="Wins"
              />
            </div>
        </div>
    )
}