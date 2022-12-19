import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'

export const AudioTag = ({Source, Name}) => {
    const [play, setPlay] = useState(true)
    

    const PlayButton = () => {
        if(typeof window !== "undefined"){
            const audio = document.getElementById(Name);
            audio.play()
        }
    }

    const PauseBottom = () => {
        if(typeof window !== "undefined"){
            const audio = document.getElementById(Name);
            audio.pause()
        }
    }

    const Replay = () => {
        if(typeof window !== "undefined"){
            const audio = document.getElementById(Name);
            audio.load()
            setPlay(true)
            PauseBottom()
        }
    }

    return (
        <div>
            <audio  className='Audio' id={Name} >
                    <source src={Source}  type='audio/mpeg'/>
            </audio>
            <div className='flex flex-row justify-center w-[15%] left-[80%] align-middle md:w-[10%] text-[1.5rem] rounded-md shadow-xl xl:text-[2.5rem] text-white bg-black relative top-[9vw] md:left-[85%]'>
                <a className='replay hover:cursor-pointer hover:scale-125 transition-all' onClick={()=> {Replay()}}>
                    <i className="bi bi-skip-start"></i>
                </a>
                <a className='Control hover:cursor-pointer hover:scale-125 transition-all' onClick={()=> {setPlay(!play); play? PlayButton(): PauseBottom()}}>
                    {play ? <i className="bi bi-play"></i>: <i className="bi bi-pause-fill"></i>}
                </a>
            </div>
        </div>
    )
}