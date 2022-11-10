import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Peintures({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Peintures </title>
        <link rel="canonical" href={`${helmet.href}/Peintures`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
    </div>
  );
}

export default Peintures;
