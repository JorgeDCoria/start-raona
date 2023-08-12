import { Outlet } from "react-router-dom";
import NavBar from "../layout/navbar/NavBar";
import Banner from "../banner/Banner";
import Footer from "../layout/footer/Footer";

/**
 * Componente de diseño para páginas comunes.
 * Este componente administra elementos comunes que se encuentran en varias páginas
 * proporcionando una estructura coherente para la navegación y el diseño general.
 * @returns {React.FC} El componente layout para paginas con la misma estructura
 */
const LayoutHome = () => {
  return (
    <div className="layout-home">
      <NavBar />
      {/* Barra de navegación */}
      <Banner />
      {/* Encabezado/banner */}
      <Outlet />
      {/* Contenido específico de la página */}
      <Footer />
      {/* Pie de página */}
    </div>
  );
};

export default LayoutHome;
