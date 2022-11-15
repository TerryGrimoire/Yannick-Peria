import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import musiquesData from "../data/musiquesData";

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
      <h1>MES MUSIQUES</h1>
      <div className="page_musiques">
        <article>
          <h2>MUSICIEN ENGAGÉ</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolorem maiores, in quisquam laboriosam assumenda perspiciatis ad
            alias reprehenderit, aperiam doloribus quo voluptatibus corporis
            provident, repellendus accusamus quaerat deleniti ab totam dicta
            odio iste debitis quidem. Atque mollitia consectetur alias amet
            nostrum impedit, nulla cum sequi magnam, aliquam dolores similique
            adipisci harum quia officia, voluptatibus autem a sed at quam! Natus
            nam maxime dolorem consequuntur molestiae accusamus, eaque eligendi
            quia voluptas? Debitis neque culpa ex suscipit iusto iste odio velit
            magni ratione, exercitationem laudantium voluptates inventore
            doloremque dolorem perferendis illum eligendi quisquam eum deleniti
            facere.
          </p>
        </article>

        <div className="musiques_video_container">
          {musiquesData.map((musique) => (
            <article>
              <h3>{musique.title}</h3>
              <iframe
                width="560"
                height="315"
                src={musique.src}
                title="YouTube video player"
                frameBorder="0"
                role="presentation"
                className="musiques_yt"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullScreen"
                allowFullScreen
              />
              <p>{musique.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Musiques;
