import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Musiques({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Helmet>
        <title> {helmet.title} | Musiques </title>
        <link rel="canonical" href={`${helmet.href}/Musiques`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
    </main>
  );
}

export default Musiques;
