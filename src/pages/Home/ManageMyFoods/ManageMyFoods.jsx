import { useEffect, useState } from "react";
import ManageCard from "./ManageCard";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
    const [request, setRequest] = useState([])
    useEffect(() => {
        fetch('https://community-food-sharing-server-xi.vercel.app/requestfoods')
            .then(res => res.json())
            .then(data => setRequest(data))
        console.log(setRequest)
    }, [])

    const handleDelete =(id)=>{
        Swal.fire({
        title: "Are you sure?",
       text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       fetch(`https://community-food-sharing-server-xi.vercel.app/requestfoods${id}`,{
      method:'DELETE'
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.deletedCount > 0){
        Swal.fire({
      title: "Deleted!",
       text: "Your Food has been deleted.",
        icon: "success"
        });
        }
        const remaing = request.filter(requests=>requests._id !==id)
        setRequest(remaing)
        })
        }
      }) 
      }
    return (
        <div >
            <table className="table  mx-auto mt-5 
 bg-gradient-to-r from-[#151515] to-yellow-300">
                <thead >
                    <tr className="text-white">
                        <th>photo</th>
                        <th>Quantity</th>
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                </thead>
            </table>
            <div className=" text-white bg-gradient-to-r from-[#151515] to-yellow-300">
                {request.map(requests =>
                    <ManageCard key={requests._id} requests={requests}
                        handleDelete={handleDelete} ></ManageCard>)}
            </div>
            </div>
            );
};

            export default ManageMyFoods;