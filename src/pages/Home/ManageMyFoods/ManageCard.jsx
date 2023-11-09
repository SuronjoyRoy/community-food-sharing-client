import { Link } from "react-router-dom";

const ManageCard = ({ManageCard, handleDelete}) => {
    const { _id ,photo,Quantity,Location,Date} =ManageCard;
    return (
        <div className="mt-10 ">

<div className="overflow-x-auto ">
  <table className="table">

    <tbody>
      <tr>
        <th>
        <div className="mask mask-squircle w-28 h-20">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
        </th>
        <td>
          <div className="flex items-center space-x-3">
        
            <div>
              <div className="font-bold">{Quantity}</div>
              </div>
          </div>
        </td>
        <td>
          {Location}
        </td>
        <td>{Date}</td>
        <th className='text-2xl font-bold'>
         <button onClick={()=> handleDelete(_id)}>Delete</button>
        </th>
        <th className='text-2xl font-bold'>
        <Link to={`/updatedFood/${_id}`}>
        <button >Edit</button>
        </Link>
        </th>
        <th className='text-2xl font-bold'>
        <Link to={`/manageSingleFood/${_id}`}>
        <button className='btn btn-info' > Manage </button>
        </Link>
        </th>
      </tr>
      </tbody>
  </table>
</div>           
  </div>
 );
};


export default ManageCard;