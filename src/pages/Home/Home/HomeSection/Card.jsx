import { Link, useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const Card = () => {
    const foods = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl py-3 text-center font-medium">Our Feature Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2 mx-auto p-2">

                {
                    foods.slice(0, 6).map(food => <Cards key={food._id} food={food}></Cards>)
                }

            </div>
            <Link to='/avaiablefoods'>
                <div className="flex justify-end mb-7">
                    <button className="btn btn-success" type="button">Show All Food</button>
                </div>
            </Link>
        </div>

    );
};

export default Card;