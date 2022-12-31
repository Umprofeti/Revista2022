import Fatima from "../public/static/images/FATIMA-SAEZ.png";
import Image from "next/image";
import { HeaderPag } from "./Header";
import { YoutubeEmeded } from "./YoutubeEmbeded";

export const Agronegocio = ({ Width }) => {
  return (
    <div className="">
      <div className="my-2 bg-white shadow-xl">
        <HeaderPag Title="AGRONEGOCIO" />
        <YoutubeEmeded Url={"https://www.youtube.com/watch?v=y3Lxh9SxM8M"} />
      </div>
      <div className="my-2 bg-white shadow-xl">
        <HeaderPag Title="AGRONEGOCIO" />
        <Image
          src={Fatima.src}
          width={Width}
          height={0}
          className="w-full"
          alt="Agro-2"
        />
      </div>
    </div>
  );
};
