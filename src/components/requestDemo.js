import React from "react"
import OpenContactButton from './openContactButton';
import {graphql, StaticQuery} from "gatsby";

import './requestDemo.scss';

export default class RequestDemo extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            contentfulRequestDemo(title: { eq: "Request Demo" })	{
              text,
              buttonText
            }
          }
        `}
        render={data => (
          <div className="request-demo">
            <div className="demo-details">
              <p>{data.contentfulRequestDemo.text}</p>
              <OpenContactButton contactMode={"Demo"}>{data.contentfulRequestDemo.buttonText}</OpenContactButton>
            </div>
          </div>
        )}
      />
    );
  }
}