import Image from "next/image";
import { HeaderPag } from "./Header";
import Boda from '../public/static/images/BODA--DEL-AÑO.png'
import Panoleta from '../public/static/images/Pañoleta-de-amor.png'
import TableDream from '../public/static/images/TABLE-DREAM.png'

export const Sociedad = ({Width}) => {
    return (
        <>
            <div>
                <HeaderPag Title='SOCIEDAD'/>
                <Image src={Boda.src}
                        width={Width}
                        height={Width}
                        className="w-full"
                        alt="Sociedad-1"
                />
                <HeaderPag Title='SOCIEDAD'/>
                <Image src={Panoleta.src}
                        width={Width}
                        height={Width}
                        className="w-full"
                        alt="Sociedad-2"
                />
                <HeaderPag Title='SOCIEDAD'/>
                <Image src={TableDream.src}
                        width={Width}
                        height={Width}
                        className="w-full my-1"
                        alt="Sociedad-3"
                />
            </div>
        </>
    )
}