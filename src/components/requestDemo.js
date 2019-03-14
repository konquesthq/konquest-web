import React from "react"
import OpenContactButton from './openContactButton';

import './requestDemo.scss';

export default class RequestDemo extends React.Component {
  render() {
    return (
      <div className="request-demo">
        <div className="demo-details">
          <p>Ut porttitor massa tellus, sit amet tempor nibh tincidunt eget.</p>
          <OpenContactButton>Request Demo</OpenContactButton>
        </div>
      </div>
    );
  }
}