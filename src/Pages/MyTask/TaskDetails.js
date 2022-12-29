import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import editIcon from "../../Assets/svgIcon/icons8-edit.svg";
import DeleteIcon from "../../Assets/svgIcon/icons8-trash.svg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loader from "../../Loader/Loader";
import TaskModal from "../TaskModal/TaskModal";

const TaskDetails = ({ task, refetch }) => {
  
const {setTask, loading} = useContext(AuthContext)

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

  const handleUpdate = (task)=>{

    setTask(task)

   



  }

  if(loading){
    return <Loader></Loader>
  }

  return <div>
    <div className="mx-auto mt-8">
      <div className="border rounded-md px-4 shadow-lg mx-20 ">
        <div>
          <div className="flex justify-end mt-4 gap-40">
            <button  onClick={()=>handleDelete(task?._id)} className="border rounded-full p-2 bg-stone-400">
              <img className="w-5" src={DeleteIcon} alt="" />
            </button>
            <label  htmlFor="my-modal-3" onClick={()=>handleUpdate(task)} className="border rounded-full p-2 bg-stone-400">
              <img  className="w-5" src={editIcon} alt="" />
            </label>
          </div>
          <div className="p-10">
            <h2>Activity Name: {task?.name}</h2>
            <h3>Date-Time: {task?.dateTime} </h3>

            <p className=""> Description : {task?.description}</p>
          </div>
        </div>
      </div>

      <TaskModal></TaskModal>
    </div>
  </div>;
};

export default TaskDetails;
