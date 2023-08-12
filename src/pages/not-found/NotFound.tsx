import Footer from "../../components/layout/footer/Footer";
import NavBar from "../../components/layout/navbar/NavBar";

const NotFound: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="not-found">
        <h1>404</h1>
        <p>¡Página no encontrada!</p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
