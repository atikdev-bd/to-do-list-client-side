import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import img from "../../Assets/img/toDoListPhoto.png";

const AddTask = () => {
  const { register, handleSubmit, reset  } = useForm();

  const onSubmit = data => {
    console.log(data);
    fetch('http://localhost:5000/task', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if (result) {
                toast('New Todo added successfully!')
                reset();
                // window.location.reload();
            }
        })
};

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="m-2 text-dark text-center">Add a New Todo Here</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
               {...register('name')}
                type="text"
                name="name"
                placeholder="Task name"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Day & Time</span>
              </label>
              <input
              {...register('date-time')}
                 name='date-time'
                type="text"
                placeholder="Select day and time"
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
              name='description'
                className="textarea textarea-bordered rounded-none"
                placeholder="Description"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Task</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
