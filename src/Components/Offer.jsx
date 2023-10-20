import offerImg from "../assets/motorOIls.jpg";
import useAuth from "../hooks/useAuth";

const Offer = () => {
  const { isDark } = useAuth();
  return (
    <div
      className={`${
        isDark && "bg-gray-800 text-white"
      } flex flex-col lg:flex-row justify-between items-center px-32 py-10 mt-32 bg-gray-200 rounded-xl`}
    >
      <div>
        <img src={offerImg} alt="" />
      </div>

      <div className="space-y-3">
        <p className="text-blue-600 font-semibold text-center">Special Offer</p>
        <h2 className="text-3xl font-semibold text-center">SHELL MOTOR OILS</h2>
        <p className="font-medium text-center">
          Discount up to{" "}
          <span className="text-green-600 font-medium"> 30% </span>
          Off
        </p>
        <div className="flex justify-center">
          <button className="btn bg-[#DD3333] text-white mx-auto border-none">
            Start Buying
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
