import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const products = useLoaderData();
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
      <div className="w-full lg:w-1/2 mx-auto">
        <h2 className="text-3xl font-semibold text-center">
          Upate Existing Product
        </h2>
        <form className="mt-16" onSubmit={handleUpdate}>
          <div className="flex justify-around gap-16">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="enter product name"
                className="input input-bordered w-full max-w-xs"
                name="name"
                defaultValue={name}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="enter brand name"
                className="input input-bordered w-full max-w-xs"
                name="brand"
                defaultValue={brand}
              />
            </div>
          </div>
          <div className="flex justify-around gap-16">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                type="text"
                placeholder="enter product price"
                className="input input-bordered w-full max-w-xs"
                name="price"
                defaultValue={price}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>
              <input
                type="text"
                placeholder="enter product type"
                className="input input-bordered w-full max-w-xs"
                name="type"
                defaultValue={type}
              />
            </div>
          </div>
          <div className="flex justify-around gap-16">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="text"
                placeholder="enter product image"
                className="input input-bordered w-full max-w-xs"
                name="photo"
                defaultValue={photo}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Rating</span>
              </label>
              <input
                type="text"
                placeholder="enter product rating"
                name="rating"
                className="input input-bordered w-full max-w-xs"
                defaultValue={rating}
              />
            </div>
          </div>
          <div></div>

          <div>
            <button className="btn w-full bg-[#DD3333] text-white mt-10">
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
