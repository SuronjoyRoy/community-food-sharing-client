import { object } from "prop-types";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const FoodDetails = () => {
    const { user } = useContext(AuthContext);
    const [food, setFood] = useState([]);
    console.log(food);
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:4000/foods/${id}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [id])
    const { name, photo, quantity, location, date,} = food;

    const handleSubmit = e => {
        e.preventDefault();
        console.log('handle clicked')
    }
    return (
        <div>

            <div className="card card-compact p-7 bg-base-100 shadow-xl mb-4">
                <figure>
                    <img src={photo} className="w-full h-[350px]" alt="" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title ">{name}</h2>
                    <p>{quantity}</p>
                    <p>{location}</p>
                    <p>{date}</p>
                </div>
                <div className="card-actions justify-center">

                    <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Request Button</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit}>
                                <label>Food Name:</label>
                                <input type="text" value={name} readOnly />
                                <br />
                                <label>Food Image:</label>
                                <img className="w-[30%]" src={photo} alt="" />
                                <br />
                                <label>Food ID:</label>
                                <input type="text" value={id} readOnly />
                                <br />
                                <label>Food Donator Email:</label>
                                <input type="text" value={user?.email} readOnly />
                                <br />
                                <label>Food Donator Name:</label>
                                <input type="text" value={user?.displayName} readOnly />

                                <br />
                                <label>Request Date:</label>
                                <input type="text" value={new Date().toLocaleString()} readOnly />
                                <br />
                                <label>Pickup Location:</label>
                                <input type="text" value={location} readOnly />
                                <br />
                                <label>Expire Date:</label>
                                <input type="text" value={date} readOnly />
                                <br />
                                <label>Additional Notes:</label>
                                <input
                                    type="text"


                                />
                                <br />
                                <label>Donation Money:</label>
                                <input
                                    type="text"


                                />
                                <br />

                                {/* Submit Button */}
                                <button className="btn btn-sucess" type="submit">Request</button>
                                
                            </form>
                        </div>

                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default FoodDetails;