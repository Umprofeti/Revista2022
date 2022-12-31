import Image from "next/image";
import { HeaderPag } from "./Header";
import Tatto from "../public/static/images/TATTOO.png";
import Diego from "../public/static/images/DIEGO-VARGAS.png";

export const Tendencia = ({ Width }) => {
  return (
    <>
      <div className="my-2 bg-white shadow-xl">
        <HeaderPag Title="TENDENCIA" />
        <Image
          src={Tatto.src}
          width={Width}
          height={0}
          className="w-full"
          alt="Tendencia-1"
        />
      </div>
      <div className="my-2 bg-white shadow-xl">
        <HeaderPag Title="TENDENCIA" />
        <Image
          src={Diego.src}
          width={Width}
          height={0}
          className="w-full"
          alt="Tendencia-2"
        />
      </div>
    </>
  );
};
