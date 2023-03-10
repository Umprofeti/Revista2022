import Image from "next/image";
import Arline from "../public/static/images/ARLINE.png";
import audioArline from "../public/static/audio/ARLINE_FRANCIS.ogg";
import { HeaderPag } from "./Header";
import { AudioTag } from "./audioTag";
import { useState, useEffect } from "react";
import { YoutubeEmeded } from "./YoutubeEmbeded";

export const Empresarios = ({ Width }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    setHasWindow(true);
  }, []);

  return (
    <div className="mb-[-12%] ">
      <div className="bg-white shadow-xl">
        <HeaderPag Title="EMPRESARIOS" />
        <YoutubeEmeded Url={"https://www.youtube.com/watch?v=JM9HgfHe5Go"} />
      </div>
      <div className="bg-white shadow-xl">
        <HeaderPag Title="EMPRESARIOS" />
        <div className="">
          <AudioTag Source={audioArline} Name={"ArlineAudio"} />
          <Image
            src={Arline.src}
            width={Width}
            height={0}
            className="mt-[-5%] w-full"
            alt="E-1"
          />
        </div>
      </div>
    </div>
  );
};
