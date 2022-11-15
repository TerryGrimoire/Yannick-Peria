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
    <img src={data.image} alt={data.alt} onDragStart={handleDragStart} />
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
            facere. Quaerat id provident assumenda nostrum obcaecati magnam
            animi libero sed, quod autem facere explicabo et beatae fugiat minus
            fugit qui inventore blanditiis fuga quas tenetur similique ratione.
            Accusantium aperiam tenetur, vero sunt qui, numquam totam debitis
            quis ab veniam, at iste natus molestiae illum blanditiis tempore
            ducimus optio quae eum dolorum provident ipsam perferendis. Saepe?
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
          <div>
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
