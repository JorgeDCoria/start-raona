import image from "../../assets/loading.svg";
const Loading = () => {
  return (
    <div className="loading-container">
      <p>Cargando Datos ...</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Loading;
