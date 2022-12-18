import Image from "next/image";
import { HeaderPag } from "./Header";
import Nautico from '../public/static/images/Autoridad-Nautico.png'
import Beatriz from '../public/static/images/BEATRICE.png'

export const Morloports = ({Width}) => {
    return(
        <>
            <div>
                <HeaderPag Title='MARLOPORTS'/>
                <Image src={Beatriz.src}
                        width={Width}
                        height={Width}
                        className="w-full"
                        alt="marlo-1"
                />
            </div>
            <div>
                <HeaderPag Title='MARLOPORTS'/>
                <Image src={Nautico.src}
                        width={Width}
                        height={Width}
                        className="w-full"
                        alt="marlo-2"
                />
            </div>
        </>
    )
}