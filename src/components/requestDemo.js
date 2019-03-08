import React from "react"

import './requestDemo.scss';

export default class RequestDemo extends React.Component {
  handleRequestDemo() {

  }

  render() {
    return (
      <div className="request-demo">
        <div className="demo-details">
          <p>Ut porttitor massa tellus, sit amet tempor nibh tincidunt eget. Cras volutpat interdum sem vitae vulputate.
            Morbi a dolor ut nisl ullamcorper tempor. Proin est ante, aliquet sed.</p>
          <button type="button" onClick={this.handleRequestDemo}>Request Demo</button>
        </div>
      </div>
    );
  }
}