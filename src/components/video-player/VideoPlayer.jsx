import "./VideoPlayer.css";
import { MdCancel } from "react-icons/md";

export default function VideoPlayer({ videoId, isPlay, setIsPlay }) {
  return (
    <div className={`video-container ${isPlay ? "" : "hide"}`}>
      {isPlay ? (
        <>
          <MdCancel className="close-icon" onClick={() => setIsPlay(false)} size={"50px"} />
          <div className="video-player">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : null}
    </div>
  );
}
