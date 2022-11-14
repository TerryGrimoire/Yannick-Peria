import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import parcoursData from "../data/parcousData";
import yannick from "../assets/yannick.png";

function Bio({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="page_bio">
      <Helmet>
        <title> {helmet.title} | Bio </title>
        <link rel="canonical" href={`${helmet.href}/Bio`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div className="bio_top">
        <h1>À PROPOS DE YANNICK</h1>
        <img
          src={yannick}
          alt="protrait de Yannick Peria"
          className="yannick"
        />
        <article>
          <h2>Biographie</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
            labore saepe amet inventore cumque quae sapiente nam nulla alias,
            dolorum aliquid. Qui cum sunt, fuga mollitia unde placeat, nobis
            officia, pariatur reprehenderit accusantium quisquam! Nostrum iste
            harum minus nisi nesciunt perferendis quis, quidem fugit nihil at id
            quam, odit laborum!
          </p>
        </article>
      </div>
      <section className="bio_main">
        <h2>Mon parcours</h2>
        <div className="bio_parcours">
          {parcoursData.map((el) => (
            <div className="flex">
              <div className={el.classCSS} />
              <div className="bio_parcours_content">
                <h3>{el.title}</h3>
                <h4>{el.date}</h4>
                <p>{el.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bio_bottom">
        <h2>Militant LGBT à La Réunion</h2>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freunionla1ere%2Fvideos%2F1960718324069872%2F&show_text=false&width=476&t=0"
          width="476"
          height="476"
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="yannick video pour Mi Exist Reunion 1ere"
        />
      </section>
    </main>
  );
}

export default Bio;
