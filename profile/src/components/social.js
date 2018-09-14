import React, { Component } from "react";
import '../App.css';

class Social extends Component {
  render() {
    return (

      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>Contact me on any of my social media sites. I am always available.
        </p>
        <div className="social">
        <a href="https://github.com/renecruzATX" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/rene-cruz-6919002a/" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        <a href="https://www.instagram.com/thatrenecruz/" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
        </div>
      </div>
    );
  }
}

export default Social;
