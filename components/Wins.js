import Image from "next/image";
import { HeaderPag } from "./Header";
import audioWins from "../public/static/audio/WINS.mp3";
import WinsImage from "../public/static/images/WINS.png";
import { AudioTag } from "./audioTag";
import { YoutubeEmeded } from "./YoutubeEmbeded";

export const Wins = ({ Width }) => {
  return (
    <div className="mb-2 bg-white shadow-xl">
      <HeaderPag Title="PORTADA" />
      <div className="mt-[-5%]">
        <AudioTag Source={audioWins} Name={"WinsAudio"} />
        <Image
          src={WinsImage.src}
          width={Width}
          height={0}
          className="w-full"
          alt="Wins"
        />
      </div>
      <YoutubeEmeded Url={"https://www.youtube.com/watch?v=6ZeTgrbkJOs"} />
    </div>
  );
};
