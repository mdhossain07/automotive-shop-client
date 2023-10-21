import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const UpdateProduct = () => {
  const products = useLoaderData();

  const { isDark } = useAuth();
  const { _id, name, brand, price, type, photo, rating } = products;

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;
    const photo = form.photo.value;
    const rating = form.rating.value;

    const product = { name, brand, price, type, photo, rating };

    fetch(
      `https://automotive-shop-server-9lnykxr8o-mdhossain07.vercel.app/products/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Done!", "Product is updated", "success");
          form.reset();
          navigate("/");
        }
      });
  };
  return (
    <div>
      <div
        className={`w-full lg:w-1/2 mx-auto px-6 py-10 rounded-xl ${
          isDark ? "bg-gray-800" : "bg-base-100"
        }`}
      >
        <h2 className="text-3xl font-semibold text-center">
          Upate Existing Product
        </h2>
        <form className="mt-16" onSubmit={handleUpdate}>
          <div className="flex justify-around gap-16">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span
                  className={`${isDark && "text-white"} label-text font-medium`}
                >
                  Product Name
                </span>
              </label>
              <input
                type="text"
                placeholder="enter product name"
                className={`input input-bordered w-full max-w-xs ${
                  isDark && "text-black"
                }`}
                name="name"
                defaultValue={name}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span
                  className={`${isDark && "text-white"} label-text font-medium`}
                >
                  Brand Name
                </span>
              </label>
              <input
                type="text"
                placeholder="enter brand name"
                className={`input input-bordered w-full max-w-xs ${
                  isDark && "text-black"
                }`}
                name="brand"
                defaultValue={brand}
              />
            </div>
          </div>
          <div className="flex justify-around gap-16">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span
                  className={`${isDark && "text-white"} label-text font-medium`}
                >
                  Product Price
                </span>
              </label>
              <input
                type="text"
                placeholder="enter product price"
                className={`input input-bordered w-full max-w-xs ${
                  isDark && "text-black"
                }`}
                name="price"
                defaultValue={price}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span
                  className={`${isDark && "text-white"} label-text font-medium`}
                >
                  Product Type
                </span>
              </label>
              <input
                type="text"
                placeholder="enter product type"
                className={`input input-bordered w-full max-w-xs ${
                  isDark && "text-black"
                }`}
                name="type"
                defaultValue={type}
              />
            </div>
          </div>
          <div className="flex justify-around gap-16">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span
                  className={`${isDark && "text-white"} label-text font-medium`}
                >
                  Product Image
                </span>
              </label>
              <input
                type="text"
                placeholder="enter product image"
                className={`input input-bordered w-full max-w-xs ${
                  isDark && "text-black"
                }`}
                name="photo"
                defaultValue={photo}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span
                  className={`${isDark && "text-white"} label-text font-medium`}
                >
                  Product Rating
                </span>
              </label>
              <input
                type="text"
                placeholder="enter product rating"
                name="rating"
                className={`input input-bordered w-full max-w-xs ${
                  isDark && "text-black"
                }`}
                defaultValue={rating}
              />
            </div>
          </div>
          <div></div>

          <div>
            <button className="btn w-full bg-[#DD3333] text-white mt-10 border-none">
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
