// import { useLoaderData } from "react-router-dom";
import Cards from "../Home/HomeSection/Cards";
import { useEffect, useState } from "react";
import axios from "axios";

const AvailableFoods = () => {
    // const foods = useLoaderData();
    const [food, setFood] = useState([]);

    useEffect(() => {
        axios
            .get("https://community-food-sharing-server-xi.vercel.app/foods")
            .then(function (response) {
                console.log(response);
                setFood(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const sortedFoodData = food.map(food => ({
        ...food,
        publishDate: new Date(food.date)
      })).sort((a, b) => b.publishDate + a.publishDate);

    const handleSearchFood = (e) => {
        e.preventDefault();
        const enteredSearchValue = e.target.search.value.toLowerCase();
        e.target.reset();

        const filtereFood = food.filter(
            (food) => food?.name.toLowerCase() === enteredSearchValue
        );

        setFood(filtereFood);
    };
    return (

        <div>
            <form
                onSubmit={handleSearchFood}
                className="border-2 border-gray-200 my-2 md:my-4 p-1 rounded-md flex w-full md:w-1/3"
            >
                <button className="btn-group btn border-none border-l-2 w-1/3 border-gray-200 rounded-r-md">
                    Search
                </button>
                <input
                    type="text"
                    name="search"
                    placeholder="Search Here"
                    className="pl-4 w-2/3 border-none"
                />
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2 mx-auto p-2">
                {
                    sortedFoodData.map(food => <Cards key={food._id} food={food}></Cards>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;