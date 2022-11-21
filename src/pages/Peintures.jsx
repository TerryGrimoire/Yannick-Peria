import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import OeuvresData from "../data/oeuvresData";
import croix from "../assets/fermer.png";

function Peintures({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = OeuvresData.map((data) => (
    <div className="peintures_carousel">
      <img src={data.image} alt={data.alt} onDragStart={handleDragStart} />
      <h4>{data.title}</h4>
      <small>{data.size}</small>
      <small>{data.details}</small>
    </div>
  ));

  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 10,
    },
  };

  const [openCarousel, setOpenCarousel] = useState(false);
  return (
    <div className="peintures">
      <Helmet>
        <title> {helmet.title} | Peintures </title>
        <link rel="canonical" href={`${helmet.href}/Peintures`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div className="page_peintures">
        <h1>MES PEINTURES</h1>
        <article>
          <h2>LA KOUR</h2>
          <p>
            La Kour désigne à l'origine le jardin. Son sens a évolué et
            aujourd'hui La Kour est un point de rassemblement de famille, d'amis
            proches, elle est un foyer comme la kaz mémé ou un lieuextérieur
            comme in boutik lontan, in ron batay kok, dann fon jardin... Elle
            est un lieu cher à ses personnes, elle les voit et les fait grandir.
            La Kour témoigne des moments de vie partagés, des souvenirs créés
            ensemble.
          </p>
          <p>
            Le point de départ de mes peintures est la cuisine au feu de bois de
            chez mes grand-mères. Ce lieu intime dans les familles réunionnaises
            est celui de la transmission de la culture, des secrets de famille.
            Elle caractérise à elle-seule le foyer, un espace réconfortant et
            chaleureux.
          </p>
          <p>
            Je peins pour témoigner de ces lieux qui fondent la mémoire intime
            des familles réunionnaises, ces lieux voués à disparaître au profit
            de la modernisation.
          </p>
          <p>
            Le geste instinctif m'anime plus que la recherche du détail, il
            traduit des sensations et des émotions. Les couleurs et le format
            vont à l'essentiel : Ma palette de couleur est réduite. Le noir et
            blanc est nostalgique, évoque le souvenir des moments disparus. Le
            jaune est solaire et le bleu est ciel, ils apportent la vie.
          </p>
          <p>
            Le choix grand format permet de se plonger dans la scène, s'immerger
            et ressentir les émotions que je cherche à retranscrire.
          </p>
        </article>

        <div className="peintures_img_container">
          {OeuvresData.map((oeuvre) => (
            <button type="button" onClick={() => setOpenCarousel(true)}>
              <img src={oeuvre.image} alt={oeuvre.alt} />
            </button>
          ))}
        </div>
        <div className={openCarousel ? "open_carousel_container" : "hidden"}>
          <button
            type="button"
            onClick={() => setOpenCarousel(false)}
            className="croix"
          >
            <img src={croix} alt="croix pour fermer la page" />
          </button>
          <div className="peinture_carousel_container">
            <AliceCarousel
              disableDotsControls
              animationDuration="600"
              mouseTracking
              infinite
              responsive={responsive}
              items={items}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Peintures;
