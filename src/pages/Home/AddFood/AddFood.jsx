import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const AddFood = () => {
   const {user} = useContext(AuthContext);

    const handleAddFood = e => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        const quantity = form.quantity.value
        const location = form.location.value
        const date = form.date.value
        const notes = form.notes.value
        const donarName = user?.displayName
        const donarImg = user?.imageURL
        const donarEmail = user?.email
        const status = 'available'

        form.reset();

        const newFood = {
            name,
            photo,
            quantity,
            location,
            date,
            notes,
            donarName,
            donarImg,
            donarEmail,
            status
        }
        

        // send data to the server side

        fetch('https://community-food-sharing-server-xi.vercel.app/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        {
                            title: "success",
                            text: "You have successfully added",
                            icon: "success",
                            confirmButtonText: "Ok"
                        }
                    )
                }
            })


    };
    return (
        <form onSubmit={handleAddFood} className="bg-white lg:p-20">
            <h1 className="text-3xl mb-4 font-bold text-center">Add a Food</h1>
            {/* form name and quantity row */}
            <div className="md:flex gap-8 mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <label className="input-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Food Name"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Food Image</span>
                    </label>
                    <label className="input-group">
                        <input
                            type="text"
                            name="photo"
                            placeholder="Food URL link"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
            </div>

            {/* form supplier test row */}

            <div className="md:flex gap-8 mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Food Quantity
                        </span>
                    </label>
                    <label className="input-group">
                        <select
                            name="quantity"
                            id=""
                            className=" input input-bordered w-full"
                        >
                            <option value="1person">1 person</option>
                            <option value="2person">2 person</option>
                            <option value="3person">3 person</option>
                            <option value="4person">4 person</option>
                            <option value="5person">5 person</option>
                            <option value="6person">6 person</option>
                            <option value="7person">7 person</option>
                            <option value="8person">8 person</option>
                            <option value="9person">9 person</option>
                            <option value="10person">10 person</option>
                            <option value="11person">11 person</option>
                            <option value="12person">12 person</option>
                            <option value="13person">13 person</option>
                            <option value="14person">14 person</option>
                            <option value="15person">15 person</option>
                            <option value="16person">16 person</option>
                            <option value="17person">17 person</option>
                            <option value="18person">18 person</option>
                            <option value="19person">19 person</option>
                            <option value="20person">20 person</option>
                        </select>
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Location</span>
                    </label>
                    <label className="input-group">
                        <input
                            name="location"
                            type="text"
                            placeholder="Pickup Location"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex gap-8 mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Expired Date</span>
                    </label>
                    <label className="input-group">

                        <input
                            type="date"
                            name="date"
                            placeholder="Date"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold">Additional Notes</span>
                    </label>
                    <label className="input-group">
                        <textarea className="textarea  input input-bordered w-full h-[80px]  " name="notes" placeholder=""></textarea>

                    </label>
                </div>
            </div>

            <input
                type="submit"
                value="Add Food"
                className="btn btn-block bg-black border-none text-white"
            />
        </form>
    );
};

export default AddFood;