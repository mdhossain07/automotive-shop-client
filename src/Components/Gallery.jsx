import car1 from "../assets/Ford Fusion.jpeg";
import car2 from "../assets/GLE.jpg";
import car3 from "../assets/ogi-2023-lamborghini-urus-performante-032.webp";
import car4 from "../assets/Lamborghini Hurracan.jpg";
import car5 from "../assets/Mercedes A-Class 2023-8.webp";
import car6 from "../assets/BMW X5.webp";

const Gallery = () => {
  const imgStyles = {
    height: "300px",
    width: "600px",
    borderRadius: "10px",
  };
  return (
    <>
      <h2 className="text-4xl text-center font-bold my-16">Car Gallery</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
        <img style={imgStyles} src={car1} alt="" />
        <img style={imgStyles} src={car2} alt="" />
        <img style={imgStyles} src={car3} alt="" />
        <img style={imgStyles} src={car4} alt="" />
        <img style={imgStyles} src={car5} alt="" />
        <img style={imgStyles} src={car6} alt="" />
      </div>
    </>
  );
};

export default Gallery;
