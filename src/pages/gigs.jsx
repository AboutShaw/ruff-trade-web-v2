import * as React from "react";
import Header from "../components/Header";

const Gigs = () => {
  return (
    <div>
      <main >
      <Header/>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRUFFTRADE.reggae&tabs=events&width=340&height=271&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="271"
        title="Facebook events tab embed"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
      </main>

    </div>
    
  )
}

export default Gigs;
