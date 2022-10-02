import * as React from "react";
import Header from "../components/Header";
import FullBand from "../images/FullBand.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <div className="aboutMain">
        <h1 className="aboutH1">About The Band</h1>
        <img
                className="aboutImg"
                src={FullBand}
                alt="Ruff Trade full band stood outside Gorton House, Debdale, Manchester, UK" />
        <p>
          Born on the 'Ruff' cold streets of Manchester in 2016, Ruff Trade are a collaboration of artists brought together by their love of reggae music.
          Fronted by two brothers Ryan and Chris O'Neil, the band bring a fresh local sound to the UK's unstoppable growing reggae movemnet.
          Having started their journey busking in busy city and town centres, Ruff trade now lead the line at some of the countries top reggae music
          festivals supporting international legends such as Dennis Bovell, Prince Hammer, Keith Poppin, Eeka Mouse and Third World to name but a few.
        </p>
      </div>
    </div>
  )
}

export default About
