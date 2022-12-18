import Image from 'next/image'
import ContenidoPag from '../public/static/images/CONTENIDO-(PAG1).png'
import Contenido2 from '../public/static/images/CONTENIDO-(PAG2).png'
import Contenido3 from '../public/static/images/CONTENIDO-(PAG3).png'

export const Contenido = ({Width})=> {
    return (
        <div>
          <Image src={ContenidoPag.src}
                width={Width}
                height={Width}
                className="w-full"
                alt='Contenido-1'
          />
          <Image src={Contenido2.src}
                width={Width}
                height={Width}
                className="w-full"
                alt='Contenido-2'
          />
          <Image src={Contenido3.src}
                width={Width}
                height={Width}
                className="w-full"
                alt='Contenido-3'
          />
        </div>
    )
} 