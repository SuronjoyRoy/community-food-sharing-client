import { Link } from "react-router-dom";

const Cards = ({ food }) => {
    const { _id, name, photo, quantity, location, date, notes } = food;
    return (
        <div className="card card-compact p-7 bg-base-100 shadow-xl mb-4">
            <figure>
                <img src={photo} className="w-full h-[200px]" alt="" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title ">{name}</h2>
                <p>{quantity}</p>
                <p>{location}</p>
                <p>{date}</p>
                <p>{notes}</p>
            </div>
            <div className="card-actions justify-center">
                <Link to={`/avaiablefoods/${_id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Cards;