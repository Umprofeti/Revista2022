import Image from "next/image"
import logo from "../public/RV logo.png"

export const LoadAnimation = () => {

    return(
        <div className="bg-white w-[100vw] h-[100vh] flex flex-row items-center justify-center">
            <div className="w-1/2 flex flex-col justify-center items-center">
                <Image src={logo.src}
                        width={1000}
                        height={0}
                        className="animate-ping w-1/2"
                />
                <div className="text-md md:text-2xl text-center">
                    Cargando Revista ...
                </div>
            </div>
        </div>
    )
}