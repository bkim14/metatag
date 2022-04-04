import React from "react";
import { MetaTags } from 'react-meta-tags';


const Two = (props) => {
  const x=Math.random();

  return (
    <div>
      <MetaTags>
        <meta content={x+'   title'} property="og:title" />
        <meta content="description page two" property="og:description"/>
      </MetaTags>
      <h2>Hi, there :) ! page two</h2>
    </div>
  );
};

export default Two;
