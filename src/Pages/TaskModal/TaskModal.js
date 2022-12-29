import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const TaskModal = () => {
  const { task } = useContext(AuthContext);

  const [updateData, setUpdateData] = useState({});

  console.log(updateData);

  const { register, handleSubmit } = useForm();

  const handleUpdate = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/task/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updateData }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Updated Successfully");
        }
      });
  };
  const onSubmit = (data) => {
    setUpdateData(data);
  };
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <h1 className="m-2 text-dark text-center">Edit Your Todo Here</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  placeholder={task?.name}
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Day & Time</span>
                </label>
                <input
                  {...register("dateTime")}
                  name="dateTime"
                  type="text"
                  placeholder={task?.dateTime}
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  {...register("description")}
                  name="description"
                  className="textarea textarea-bordered rounded-none"
                  placeholder={task?.description}
                  required
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button
                  onClick={() => handleUpdate(task?._id)}
                  className="btn btn-success"
                >
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default TaskModal;
