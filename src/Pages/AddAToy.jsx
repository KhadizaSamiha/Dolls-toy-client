
const AddAToy = () => {
    return (
        <div className="hero min-h-[500px] text-white" style={{ backgroundImage: `url("https://i.ibb.co/k4kTQ9M/two-santa-claus-with-sled-snow.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content ">
                <form>
                    <div className="flex justify-between space-x-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellerName' placeholder="sellerName" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" name='selleremail' placeholder="selleremail" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">SubCategory</span>
                            </label>
                            <input type="text" name='subcategory' placeholder="subcategory" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="quantity" className="input input-bordered" />
                        </div>
                    </div>
                    <div className=" justify-between space-x-10 block">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input type="text" placeholder="photoUrl" className="input input-bordered" />
                        </div>
                    </div>
                    <button className="btn btn-block btn-outline mt-5">Add Toy</button>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;