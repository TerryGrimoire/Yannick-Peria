import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Bio({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Bio </title>
        <link rel="canonical" href={`${helmet.href}/Bio`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
    </div>
  );
}

export default Bio;
