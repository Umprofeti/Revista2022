import { HeaderPag } from "./Header";
import { YoutubeEmeded } from "./YoutubeEmbeded";


export const Gastronomia = () => {
    return(
        <>
            <div  className="bg-white my-2 shadow-xl">
                <HeaderPag Title='GASTRONOMÍA'/>
                <YoutubeEmeded Url={'https://www.youtube.com/watch?v=mcwTiRM0cjU'} />
            </div>
        </>
    )
}