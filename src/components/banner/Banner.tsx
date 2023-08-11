import React from "react";
import banner from "../../assets/banner.jpg";
import { PrimaryButton } from "@fluentui/react";
const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="" />
      <div className="container-data">
        <h1>
          Start <span>Raona</span>
        </h1>

        <div className="description">
          <h2>
            {" "}
            Explora un Universo Cinematográfico en Nuestro Sitio de Películas
          </h2>
          <p>
            El mundo del cine es un viaje lleno de emociones, aventuras y
            momentos inolvidables que nos transportan a lugares lejanos y
            realidades imaginarias. Bienvenidos a nuestro apasionante sitio web
            de películas, donde la magia del séptimo arte cobra vida a través de
            una extensa colección de películas que te harán reír, llorar, soñar
            y reflexionar.
          </p>
        </div>
        <div>
          <PrimaryButton text="Suscribete" className="button-primary" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
