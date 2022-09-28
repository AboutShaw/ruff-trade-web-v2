import * as React from "react";
import Header from "../components/Header";
import SpotifyLogo from '../images/SpotifyLogo.png';
import AppleMusicLogo from '../images/AppleMusicLogo.png';
import YoutubeMusicLogo from '../images/YoutubeMusicLogo.png';
import YouTubeLogo from '../images/YouTubeLogo.png'

const Music = () => {
  
  return (
    <div>
      <main >
        <Header/>
      </main>
        <div className="musicPage" >
          <h2 className="musicTitle">Listen and Watch Us Here</h2>
          <div className="mediaLogosBar">
            <a  href="https://open.spotify.com/artist/73N8KicBZN5xQk4aSIz380"
                target="_blank"
                rel="noreferrer">
                <img
                className="mediaLogo"
                src={SpotifyLogo}
                alt="Link to Ruff Trade Spotifys page" />
            </a>
            <a  href="https://music.apple.com/gb/artist/ruff-trade/1439852245"
                target="_blank"
                rel="noreferrer">
                <img
                className="mediaLogo"
                src={AppleMusicLogo}
                alt="Link to Ruff Trade Apple music page" />
            </a>
            <a  href="https://music.youtube.com/channel/UCCMYwKYaFI16UwCv56_dcAw"
                target="_blank"
                rel="noreferrer">
                <img
                className="mediaLogo"
                src={YoutubeMusicLogo}
                alt="Link to Ruff Trade YouTube music page" />
            </a>
            <a  href="https://www.youtube.com/c/RUFFTRADE"
                target="_blank"
                rel="noreferrer">
                <img
                className="mediaLogo"
                src={YouTubeLogo}
                alt="Link to Ruff Trade YouTube page" />
            </a>
          </div>
        <div>
          <a className="embededYouTubeVideo">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/boEi-ED4B8k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </a>
          </div>
        </div>
    </div>
    
  )
}

export default Music;
