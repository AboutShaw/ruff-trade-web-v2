import * as React from "react";
import Header from "../components/Header";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="indexMain">
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
  )
}

export default IndexPage
