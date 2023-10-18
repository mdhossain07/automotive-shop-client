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

    console.log(name, brand, price, type, photo, description, rating);

    const product = { name, brand, price, type, photo, description, rating };
    console.log(product);

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
        alert("product addded successfully");
        form.reset();
      });
  };

  return (
    <div>
      <h2>Add Products</h2>
      <div className="w-full lg:w-1/2 mx-auto">
        <form onSubmit={handleProduct}>
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
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Description</span>
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
                <span className="label-text">Product Rating</span>
              </label>
              <input
                type="text"
                placeholder="enter product rating"
                name="rating"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div>
            <button className="btn w-full">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
