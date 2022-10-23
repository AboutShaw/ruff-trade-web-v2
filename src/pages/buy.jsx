import * as React from "react";
import Header from "../components/Header";

const Buy = () => {
  return (
    <div>
      <Header/>
      <div className="bandCamp">
        <iframe
          title="New Album Available Now"
          border='0'
          width='700px'
          height='820px'
          src="https://bandcamp.com/EmbeddedPlayer/album=735635203/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless>
          <a href="https://rufftrade.bandcamp.com/album/mancunian-way">Mancunian Way by RUFF TRADE</a>
        </iframe>
      </div>
      

    </div>
    
  )
}

export default Buy;
