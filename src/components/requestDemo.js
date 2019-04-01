import React from "react"
import OpenContactButton from './openContactButton';

import './requestDemo.scss';

export default class RequestDemo extends React.Component {
  render() {
    return (
      <div className="request-demo">
        <div className="demo-details">
          <p>Can you spare 30mins? We'd love to show you Konquest!</p>
          <OpenContactButton>Request Demo</OpenContactButton>
        </div>
      </div>
    );
  }
}