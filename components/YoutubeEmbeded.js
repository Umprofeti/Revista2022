import ReactPlayer from 'react-player/lazy'
import { useState, useEffect } from 'react'

export const YoutubeEmeded = ({Url}) => {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(()=> {
        setHasWindow(true)
    }, [])

    return(
        <>
            <div className='block'>
              {/* {hasWindow && <ReactPlayer url={Url} controls={true} width='100%' height='350px'/>} */} 
            </div> 
        </>
    )
}