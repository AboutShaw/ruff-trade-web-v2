import * as React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Gigs = () => {
  return (
    <div>
      <main >
      <Header/>
      <Navbar/>
    </main>
      <div>
        <h3>Month 1</h3>
        <div>
          <ul>
            <li>
              <h4>Event 1</h4>
              <p>Date, Location</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Month 2</h3>
        <div>
          <ul>
            <li>
              <h4>Event 1</h4>
              <p>Date, Location</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Month 3</h3>
        <div>
          <ul>
            <li>
              <h4>Event 1</h4>
              <p>Date, Location</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Month 1</h3>
        <div>
          <ul>
            <li>
              <h4>Event 4</h4>
              <p>Date, Location</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Gigs;
