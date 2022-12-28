import React from "react";
import { toast } from "react-hot-toast";
import editIcon from "../../Assets/svgIcon/icons8-edit.svg";
import DeleteIcon from "../../Assets/svgIcon/icons8-trash.svg";

const TaskDetails = ({ task, refetch }) => {
  


  const handleDelete = (id) => {
  
    fetch(
      `http://localhost:5000/task/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("delete successfully");
        }
        refetch();
      });
  };

  return <div>
    <div className="mx-auto mt-8">
      <div className="border rounded-md px-4 shadow-lg mx-20 ">
        <div>
          <div className="flex justify-end mt-4 gap-40">
            <button onClick={()=>handleDelete(task?._id)} className="border rounded-full p-2 bg-stone-400">
              <img className="w-5" src={DeleteIcon} alt="" />
            </button>
            <button className="border rounded-full p-2 bg-stone-400">
              <img  className="w-5" src={editIcon} alt="" />
            </button>
          </div>
          <div className="p-10">
            <h2>Activity Name: {task?.name}</h2>
            <h3>Date-Time: {task?.dateTime} </h3>

            <p className=""> Description : {task?.description}d</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default TaskDetails;
