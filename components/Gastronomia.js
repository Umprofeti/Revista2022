import Image from "next/image";
import { HeaderPag } from "./Header";
import ReactPlayer from 'react-player';


export const Gastronomia = () => {
    return(
        <>
            <div>
                <HeaderPag Title='GASTRONOMÍA'/>
                <div className=' md:hidden'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=GsnSiqP7Yxk&feature=youtu.be'  width='100%' height='300px'/> 
                </div>
                <div className='hidden md:block'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=GsnSiqP7Yxk&feature=youtu.be'  width='100%' height='600px'/> 
                </div> 
            </div>
        </>
    )
}