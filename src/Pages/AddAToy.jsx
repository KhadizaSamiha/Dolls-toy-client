
const AddAToy = () => {
    const handleAddToy = event =>{
        event.preventDefault();

        const form = event.target;
        const name= form.name.value
        const seller= form.sellerName.value;
        const email= form.email.value;
        const subCategory= form.subcategory.value;
        const price= form.price.value;
        const quantity= form.quantity.value;
        const photoUrl= form.photoUrl.value;
        // console.log(name, sellerName, email, subcategory, price, quantity, photoUrl);

        const addToy ={
            name,
            seller,
            email,
            subCategory,
            price,
            quantity,
            photoUrl
        }
        console.log(addToy);
        fetch('http://localhost:5000/allToys', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    }
    return (
        <div className="hero min-h-[500px] text-white" style={{ backgroundImage: `url("https://i.ibb.co/k4kTQ9M/two-santa-claus-with-sled-snow.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content ">
                <form onSubmit={handleAddToy}>
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
                            <input type="email" name='email' placeholder="selleremail" className="input input-bordered" />
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
                            <input type="text" name='price' placeholder="price" className="input input-bordered" />
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
                            <input type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" />
                        </div>
                    </div>
                    <button className="btn btn-block btn-outline mt-5">Add Toy</button>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;