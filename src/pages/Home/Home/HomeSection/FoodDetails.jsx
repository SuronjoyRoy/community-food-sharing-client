import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
    const food = useLoaderData();
    const { name, photo, quantity, location, date} = food;
    console.log(food)
    return (
        <div>
            
            <div className="card card-compact p-7 bg-base-100 shadow-xl mb-4">
                <figure>
                    <img src={photo} className="w-full h-[200px]" alt="" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title ">{name}</h2>
                    <p>{quantity}</p>
                    <p>{location}</p>
                    <p>{date}</p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Request Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;