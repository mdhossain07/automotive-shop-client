import Swal from "sweetalert2";

const AddProducts = () => {
  const handleProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const product = { name, brand, price, type, photo, description, rating };

    fetch("http://localhost:5000/products/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Done!", "Product is added", "success");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="w-full lg:w-1/2 mx-auto">
        <h2 className="text-3xl font-semibold text-center mt-10">
          Add New Product
        </h2>
        <form className="mt-16" onSubmit={handleProduct}>
          <div className="flex justify-around gap-16">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="enter product name"
                className="input input-bordered w-full max-w-xs"
                name="name"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="enter brand name"
                className="input input-bordered w-full max-w-xs"
                name="brand"
              />
            </div>
          </div>
          <div className="flex justify-around gap-16">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Product Price</span>
              </label>
              <input
                type="text"
                placeholder="enter product price"
                className="input input-bordered w-full max-w-xs"
                name="price"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Product Type</span>
              </label>
              <input
                type="text"
                placeholder="enter product type"
                className="input input-bordered w-full max-w-xs"
                name="type"
              />
            </div>
          </div>
          <div className="flex justify-around gap-16">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Product Image</span>
              </label>
              <input
                type="text"
                placeholder="enter product image"
                className="input input-bordered w-full max-w-xs"
                name="photo"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">
                  Product Description
                </span>
              </label>
              <input
                type="text"
                placeholder="enter product description"
                name="description"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Product Rating</span>
              </label>
              <input
                type="text"
                placeholder="enter product rating"
                name="rating"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mt-10">
            <button className="btn w-full bg-[#dd3333] text-white">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
