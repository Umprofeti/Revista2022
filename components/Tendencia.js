import Image from "next/image";
import { HeaderPag } from "./Header";
import Tatto from '../public/static/images/TATTOO.png'
import Diego from '../public/static/images/DIEGO-VARGAS.png'

export const Tendencia = ({Width}) => {
    return (
        <>
            <div>
                <HeaderPag Title='TENDENCIA'/>
                <Image src={Tatto.src}
                        width={Width}
                        height={Width}
                        className="w-full"
                        alt="Tendencia-1"
                />
            </div>
            <div>
                <HeaderPag Title='TENDENCIA'/>
                <Image src={Diego.src}
                        width={Width}
                        height={Width}
                        className="w-full"
                        alt="Tendencia-2"
                />
            </div>
        </>
    )
}