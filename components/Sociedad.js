import Image from "next/image";
import { HeaderPag } from "./Header";
import Boda from '../public/static/images/BODA--DEL-AÑO.png'

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
            </div>
        </>
    )
}