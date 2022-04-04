import React from "react";
import { MetaTags } from 'react-meta-tags';
import { useParams } from 'react-router-dom';


const Three = (props) => {
  const x=Math.random();
  const {boardId}=useParams();
  return (
    <div>
      <MetaTags>
        <meta content={boardId+'   title'} property="og:title" />
        <meta content={'this is a page of ' + boardId} property="og:description"/>
      </MetaTags>
      <h2>Hi, there :) ! page three</h2>
    </div>
  );
};

export default Three;
