import * as React from "react";
import Header from "../components/Header";

const Gallery = () => {
  return (
    <div>
      <Header />
      <div className="galleryMain">
        <script src="https://embedsocial.com/js/iframe.js"></script>
        <iframe className="instaScroller"
                scrolling="no"
                src="https://embedsocial.com/api/pro_hashtag/0eb40cfd1176cf68aa712afa88484a9c18e9dc01"
                title="scroller">
        </iframe>
        <script>iFrameResize();</script>
      </div>
    </div>
  )
}

export default Gallery
